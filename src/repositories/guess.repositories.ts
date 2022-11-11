import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import {Guess, GuessEntity} from "../protocols/guess.js"
import { MatchResult } from "../protocols/match.js";

async function getGuessByMatchId(matchId:number,userId:number):Promise<QueryResult<GuessEntity>> {
	return connection.query(
		`SELECT * FROM guesses WHERE "userId"=$1 AND "matchId"=$2;`,
		[userId,matchId]
	);
}

async function insertNewGuess(guess:Guess,matchId:number,userId:number):Promise<QueryResult<GuessEntity>> {
	return connection.query(
		`INSERT INTO guesses ("userId","matchId","goalsTeam1","goalsTeam2") VALUES ($1,$2,$3,$4);`,
		[userId,matchId, guess.goalsTeam1,guess.goalsTeam2]
	);
}

async function updateGuess(guess:Guess,guessId:number):Promise<QueryResult<GuessEntity>> {	
	return connection.query(
		`UPDATE guesses SET "goalsTeam1" = $1,"goalsTeam2" = $2 WHERE id=$3;`,
		[guess.goalsTeam1,guess.goalsTeam2,guessId]
	);
}

async function deleteGuess(guessId:number):Promise<QueryResult> {	
	return connection.query(
		`DELETE FROM guesses WHERE id=$1;`,
		[guessId]
	);
}

async function rightGuesses(matchResult:MatchResult,matchId:number):Promise<QueryResult> {	
	return connection.query(
		`UPDATE guesses SET "isRight"=true WHERE "goalsTeam1" = $1 AND "goalsTeam2" = $2 AND "matchId"=$3;`,
		[matchResult.goalsTeam1,matchResult.goalsTeam2,matchId]
	);
}



export {getGuessByMatchId,insertNewGuess, updateGuess, deleteGuess,rightGuesses}