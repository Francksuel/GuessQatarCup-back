import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { guessRouter } from "./routes/guess.routes.js";
dotenv.config();
var server = express();
server.use(express.json());
server.use(cors());
server.use(guessRouter);
server.listen(process.env.PORT, function () {
    console.log("Listening on port ".concat(process.env.PORT));
});
