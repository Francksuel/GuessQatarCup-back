import express from "express";
import { deleteGuessByMatchId, getGuesses, getRanking, upsertGuess } from "../controllers/guess.controllers.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { validateToken } from "../middlewares/validate.token.js";
import { schemaGoals } from "../schemas/goals.schema.js";

const guessRouter = express.Router()

.post("/guess/:matchId",validateToken,validateSchema(schemaGoals),upsertGuess)
.delete("/guess/:matchId",validateToken,deleteGuessByMatchId)
.get("/ranking", getRanking)
.get("/guesses",validateToken,getGuesses);

export {guessRouter};