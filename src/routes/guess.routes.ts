import express from "express";
import { createGuess } from "../controllers/guess.controllers.js";

const guessRouter = express.Router();

guessRouter.post("/guess/:matchId",createGuess);

export {guessRouter};