import {Request,Response,NextFunction} from "express";

function validateSchema(schema) {
    return (req:Request, res:Response, next:NextFunction) => {
     
      const validation = schema.validate(req.body, { abortEarly: false });
  
      if (validation.error) {
        const errors:[] = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
      }
      next();
    };
  }
  
  export { validateSchema };