import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import { guessRouter } from "./routes/guess.routes.js";
dotenv.config();



const server = express();
server.use(express.json());
server.use(cors());

server.use(guessRouter);

server.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});