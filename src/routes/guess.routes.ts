import express from "express";
import { createGuess } from "../controllers/guess.controllers.js";
import { validateToken } from "../middlewares/validate.token.js";

const guessRouter = express.Router();

guessRouter.post("/guess/:matchId",validateToken,createGuess);

export {guessRouter};