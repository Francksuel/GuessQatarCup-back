import { Request, Response } from "express";
import { MatchResult } from "../protocols/match.js";
import {
	defeatGuesses,
	drawGuesses,
	rightGuesses,
	victoryGuesses,
} from "../repositories/guess.repositories.js";
import {
	updateMatchResult,
	getMatchById,
	listMatches,
} from "../repositories/match.repositories.js";

async function getMatches(req: Request, res: Response) {
	try {
		const matches = await listMatches();
		return res.status(200).send(matches.rows);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}

async function putMatchResult(req: Request, res: Response) {
	const matchResult = req.body as MatchResult;
	const matchId: number = Number(req.params.matchId);
	try {
		const match = await getMatchById(matchId);
		if (match.rowCount === 0) return res.sendStatus(404);
		await updateMatchResult(matchId, matchResult);
		const goalDiff = matchResult.goalsTeam1 - matchResult.goalsTeam2;
		if (goalDiff > 0) {
			await victoryGuesses(matchId);
		} else if (goalDiff < 0) {
			await defeatGuesses(matchId);
		} else {
			await drawGuesses(matchId);
		}
		await rightGuesses(matchResult, matchId);
		return res.sendStatus(200);
	} catch (error) {
		return res.sendStatus(500);
	}
}
export { getMatches, putMatchResult };
