import { connection } from "../database/database.js";

async function insertNewGuess({guess,matchId,userId}) {
	return connection.query(
		`INSERT INTO guesses ("userId","matchId","goalsTeam1","goalsTeam2") VALUES ($1,$2,$3,$4);`,
		[userId,matchId, guess.goalsTeam1,guess.goalsTeam2]
	);
}

export {insertNewGuess}