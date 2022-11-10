import joi from "joi";

const schemaSignUp = joi.object({  
  name: joi.string().required().max(50).trim(),
  password: joi.string().required().max(50).min(4) 
});
const schemaSignIn = joi.object({
  name: joi.string().required().max(50).trim(),
  password: joi.string().required().max(50).min(4)
});

export { schemaSignUp, schemaSignIn };