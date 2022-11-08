import express  from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/health",(req,res)=>{
res.send("OK");
})

server.listen(4000,()=>{
    console.log("Listening on port 4000");
})