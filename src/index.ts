import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import { guessRouter } from "./routes/guess.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { matchRouter } from "./routes/match.routes.js";
dotenv.config();



const server = express()
.use(express.json())
.use(cors())

.use(guessRouter)
.use(authRouter)
.use(matchRouter);

server.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});