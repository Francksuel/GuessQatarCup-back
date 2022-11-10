import { insertNewGuess } from "../repositories/guess.repositories";

async function createGuess(req, res) {
    const guess = req.body;
    const userId = 1;
    const matchId = req.params.matchId;
    try {
      await insertNewGuess({guess, userId, matchId });
    
  
      return res.sendStatus(201);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  export {createGuess};