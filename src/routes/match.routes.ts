import express from "express";

import { getMatches, putMatchResult } from "../controllers/match.controllers.js";


const matchRouter = express.Router();

matchRouter.put("/match/result/:matchId",putMatchResult);
matchRouter.get("/match",getMatches);

export {matchRouter};