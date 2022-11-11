import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import {MatchEntity, MatchResult} from "../protocols/match.js";

async function getMatchById(matchId:number):Promise<QueryResult<MatchEntity>> {
	return connection.query(
		`SELECT * FROM matches WHERE id=$1;`,
		[matchId]
	);
}
async function updateMatchResult(matchId:number,matchResult:MatchResult):Promise<QueryResult> {
	return connection.query(
		`UPDATE matches SET "goalsTeam1"=$1,"goalsTeam2"=$2 WHERE id=$3;`,
		[matchResult.goalsTeam1,matchResult.goalsTeam2,matchId]
	);
}

export {getMatchById,updateMatchResult}