import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.get("/health",async(req,res)=>{  
res.send("OK");
})

server.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
});