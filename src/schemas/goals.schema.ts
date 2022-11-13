import joi from "joi";

const schemaGoals = joi.object({  
goalsTeam1: joi.number().integer().min(0).max(15).required(),
goalsTeam2: joi.number().integer().min(0).max(15).required() 
});

export { schemaGoals };