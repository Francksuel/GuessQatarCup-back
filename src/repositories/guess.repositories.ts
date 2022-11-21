import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import { Guess, GuessEntity, userRanking } from "../protocols/guess.js";
import { MatchResult } from "../protocols/match.js";

async function getGuessByMatchId(
	matchId: number,
	userId: number
): Promise<QueryResult<GuessEntity>> {
	return connection.query(
		`SELECT * FROM guesses WHERE "userId"=$1 AND "matchId"=$2;`,
		[userId, matchId]
	);
}

async function listGuessesByUserId(	
	userId: number
): Promise<QueryResult<GuessEntity[]>> {
	return connection.query(
		`SELECT
			t1.name as "team1",
			t2.name as "team2",
			g."goalsTeam1",
			g."goalsTeam2"
		FROM guesses g
		JOIN matches m ON g."matchId"=m.id
		JOIN countries t1 ON m."team1Id"=t1.id
		JOIN countries t2 ON m."team2Id"=t2.id 
		WHERE g."userId"=$1 ORDER BY g."matchId";`,
		[userId]
	);
}

async function insertNewGuess(
	guess: Guess,
	matchId: number,
	userId: number
): Promise<QueryResult<GuessEntity>> {
	return connection.query(
		`INSERT INTO guesses ("userId","matchId","goalsTeam1","goalsTeam2") VALUES ($1,$2,$3,$4);`,
		[userId, matchId, guess.goalsTeam1, guess.goalsTeam2]
	);
}

async function updateGuess(
	guess: Guess,
	guessId: number
): Promise<QueryResult<GuessEntity>> {
	return connection.query(
		`UPDATE guesses SET "goalsTeam1" = $1,"goalsTeam2" = $2 WHERE id=$3;`,
		[guess.goalsTeam1, guess.goalsTeam2, guessId]
	);
}

async function deleteGuess(guessId: number): Promise<QueryResult> {
	return connection.query(`DELETE FROM guesses WHERE id=$1;`, [guessId]);
}

async function victoryGuesses(matchId: number): Promise<QueryResult> {
	return connection.query(
		`UPDATE guesses SET score=1 
		WHERE "goalsTeam1" > "goalsTeam2" AND "matchId"=$1;`,
		[matchId]
	);
}
async function defeatGuesses(matchId: number): Promise<QueryResult> {
	return connection.query(
		`UPDATE guesses SET score=1 
		WHERE "goalsTeam1" < "goalsTeam2" AND "matchId"=$1;`,
		[matchId]
	);
}

async function drawGuesses(matchId: number): Promise<QueryResult> {
	return connection.query(
		`UPDATE guesses SET score=1 
		WHERE "goalsTeam1" = "goalsTeam2" AND "matchId"=$1;`,
		[matchId]
	);
}

async function rightGuesses(
	matchResult: MatchResult,
	matchId: number
): Promise<QueryResult> {
	return connection.query(
		`UPDATE guesses SET score=3 
		WHERE "goalsTeam1" = $1 AND "goalsTeam2" = $2 AND "matchId"=$3;`,
		[matchResult.goalsTeam1, matchResult.goalsTeam2, matchId]
	);
}

async function listRanking(): Promise<QueryResult<userRanking>> {
	return connection.query(
		`SELECT u.name,SUM(g.score) AS "score" 
		FROM guesses g JOIN users u ON g."userId"=u.id 
		WHERE g.score != 0 GROUP BY g."userId", u.name 
		ORDER BY "score" DESC;`
	);
}

export {
	getGuessByMatchId,
	listGuessesByUserId,
	insertNewGuess,
	updateGuess,
	deleteGuess,
	rightGuesses,
	listRanking,
	victoryGuesses,
	defeatGuesses,
	drawGuesses,
};
