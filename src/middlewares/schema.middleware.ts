import {Request,Response,NextFunction} from "express";
import { ObjectSchema } from "joi";

function validateSchema(schema:ObjectSchema) {
    return (req:Request, res:Response, next:NextFunction) => {
     
      const validation = schema.validate(req.body, { abortEarly: false });
  
      if (validation.error) {
        const errors:string[] = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
      }
      next();
    };
  }
  
  export { validateSchema };