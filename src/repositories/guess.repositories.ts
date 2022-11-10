import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import {Guess, GuessEntity} from "../protocols/guess.js"

async function insertNewGuess(guess:Guess,matchId:number,userId:number):Promise<QueryResult<GuessEntity>> {
	return connection.query(
		`INSERT INTO guesses ("userId","matchId","goalsTeam1","goalsTeam2") VALUES ($1,$2,$3,$4);`,
		[userId,matchId, guess.goalsTeam1,guess.goalsTeam2]
	);
}

export {insertNewGuess}