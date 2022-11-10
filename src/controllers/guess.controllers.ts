import { Guess } from "../protocols/guess.js";
import { insertNewGuess } from "../repositories/guess.repositories.js";
import {Request, Response} from "express";

async function createGuess(req:Request, res:Response) {
    const guess = req.body as Guess;
    const userId:number = res.locals.userId;
    const matchId:number = Number(req.params.matchId);
    try {
      await insertNewGuess(guess, matchId, userId );    
  
      return res.sendStatus(201);
    } catch (error) {     
      return res.sendStatus(500);
    }
  }
  export {createGuess};