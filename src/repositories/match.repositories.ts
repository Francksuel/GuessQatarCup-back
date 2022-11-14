import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import { MatchEntity, MatchResult } from "../protocols/match.js";

async function getMatchById(
	matchId: number
): Promise<QueryResult<MatchEntity>> {
	return connection.query(`SELECT * FROM matches WHERE id=$1;`, [matchId]);
}

async function listMatches(): Promise<QueryResult<MatchEntity>> {
	return connection.query(
		`SELECT m.id, t1.name AS team1,t2.name AS team2,m."goalsTeam1",m."goalsTeam2", m."matchDate"
		FROM matches m 
		JOIN countries t1 ON m."team1Id"=t1.id
		JOIN countries t2 ON m."team2Id"=t2.id 
		ORDER BY m."matchDate";`
	);
}

async function updateMatchResult(
	matchId: number,
	matchResult: MatchResult
): Promise<QueryResult> {
	return connection.query(
		`UPDATE matches SET "goalsTeam1"=$1,"goalsTeam2"=$2 WHERE id=$3;`,
		[matchResult.goalsTeam1, matchResult.goalsTeam2, matchId]
	);
}

export { getMatchById, updateMatchResult, listMatches };
