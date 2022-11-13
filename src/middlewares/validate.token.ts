import jwt from "jsonwebtoken";
import {Request,Response,NextFunction} from "express";
import { JWTPayload } from "../protocols/user";

async function validateToken(req:Request, res:Response, next:NextFunction) {
  const { authorization } = req.headers;  
  const receivedToken:string = authorization?.replace("Bearer ", "");  
  if (!receivedToken) return res.sendStatus(401);
  try {
    const {userId}= jwt.verify(receivedToken, process.env.JWT_SECRET) as JWTPayload;
    res.locals.userId = userId;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
}

export { validateToken };