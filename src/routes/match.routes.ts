import express from "express";

import { getMatches, putMatchResult } from "../controllers/match.controllers.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { schemaGoals } from "../schemas/goals.schema.js";


const matchRouter = express.Router()

.put("/match/result/:matchId",validateSchema(schemaGoals),putMatchResult)
.get("/match",getMatches);

export {matchRouter};