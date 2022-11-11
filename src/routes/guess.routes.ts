import express from "express";
import { deleteGuessByMatchId, upsertGuess } from "../controllers/guess.controllers.js";
import { validateToken } from "../middlewares/validate.token.js";

const guessRouter = express.Router();

guessRouter.post("/guess/:matchId",validateToken,upsertGuess);
guessRouter.delete("/guess/:matchId",validateToken,deleteGuessByMatchId);

export {guessRouter};