import { Guess } from "../protocols/guess.js";
import { deleteGuess, getGuessByMatchId, insertNewGuess, updateGuess } from "../repositories/guess.repositories.js";
import {Request, Response} from "express";
import { getMatchById } from "../repositories/match.repositories.js";

async function upsertGuess(req:Request, res:Response) {
    const guess = req.body as Guess;
    const userId:number = res.locals.userId;
    const matchId:number = Number(req.params.matchId);
    try {
      const match = await getMatchById(matchId);      
      if (match.rowCount === 0) return res.sendStatus(404);    
      const today = new Date();      
      if (match.rows[0].matchDate < today) return res.status(400).send("You can't guess this match");
      const haveGuess = await getGuessByMatchId(matchId,userId);
      if (haveGuess.rowCount === 0){
        await insertNewGuess(guess, matchId, userId );
        return res.sendStatus(201);
      }
      await updateGuess(guess,haveGuess.rows[0].id) 
      res.sendStatus(200);
    } catch (error) {         
      return res.sendStatus(500);
    }
  }

  async function deleteGuessByMatchId(req:Request, res:Response) {    
    const userId:number = res.locals.userId;
    const matchId:number = Number(req.params.matchId);
    try {
      const guess = await getGuessByMatchId(matchId,userId);      
      if (guess.rowCount === 0) return res.sendStatus(404);  
      await deleteGuess(guess.rows[0].id) 
      res.sendStatus(204);
    } catch (error) {         
      return res.sendStatus(500);
    }
  }



  export {upsertGuess,deleteGuessByMatchId};