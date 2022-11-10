import jwt from "jsonwebtoken";
import {Request,Response,NextFunction} from "express";

async function validateToken(req:Request, res:Response, next:NextFunction) {
  const { authorization } = req.headers;  
  const receivedToken = authorization?.replace("Bearer ", "");  
  if (!receivedToken) return res.sendStatus(401);
  try {
    const token = jwt.verify(receivedToken, process.env.JWT_SECRET);
    res.locals.userId = token.userId;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
}

export { validateToken };