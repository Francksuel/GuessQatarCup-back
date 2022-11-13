import joi from "joi";

const schemaAuth = joi.object({  
  name: joi.string().required().max(50).trim(),
  password: joi.string().required().max(50).min(4) 
});

export { schemaAuth };