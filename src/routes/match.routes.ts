import express from "express";

import { putMatchResult } from "../controllers/match.controllers.js";


const matchRouter = express.Router();

matchRouter.put("/match/result/:matchId",putMatchResult);

export {matchRouter};