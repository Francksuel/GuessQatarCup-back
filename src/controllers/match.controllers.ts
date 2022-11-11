import {Request, Response} from "express";
import { MatchResult } from "../protocols/match.js";
import { rightGuesses } from "../repositories/guess.repositories.js";
import { updateMatchResult,getMatchById } from "../repositories/match.repositories.js";

async function putMatchResult(req:Request, res:Response) {
    const matchResult = req.body as MatchResult;    
    const matchId:number = Number(req.params.matchId);
    try {
      const match = await getMatchById(matchId);
      if (match.rowCount === 0) return res.sendStatus(404);
      await updateMatchResult(matchId, matchResult );  
      const guesses = await rightGuesses(matchResult,matchId);      
      return res.status(200).send(guesses.rowCount+" right guesses.");
    } catch (error) {       
      return res.sendStatus(500);
    }
  }
  export {putMatchResult};