import express from "express";

import { validateSchema } from "../middlewares/schema.middleware.js";
import { schemaAuth } from "../schemas/auth.schema.js";
import { signUp, signIn } from "../controllers/auth.controllers.js";

const authRouter = express.Router()
.post("/sign-up",validateSchema(schemaAuth), signUp)
.post("/sign-in",validateSchema(schemaAuth), signIn);

export { authRouter };