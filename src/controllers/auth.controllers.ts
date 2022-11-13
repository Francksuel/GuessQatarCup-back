import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import {
	insertUser,
	getUserByName,
} from "../repositories/auth.repositories.js";
import { User } from "../protocols/user.js";

async function signUp(req: Request, res: Response) {
	const user = req.body as User;
	const passwordHash:string = bcrypt.hashSync(user.password, 10);
	try {
		const nameUser = await getUserByName(user.name);
		if (nameUser.rowCount !== 0) return res.sendStatus(409);
		await insertUser(user.name, passwordHash);
		res.sendStatus(201);
	} catch (error) {
		res.sendStatus(500);
	}
}
async function signIn(req: Request, res: Response) {
	const userData = req.body as User;
	try {
		const user = await getUserByName(userData.name);
		if (
			user.rowCount !== 0 &&
			bcrypt.compareSync(userData.password, user.rows[0].password)
		) {
			const token = jwt.sign(
				{
					userId: user.rows[0].id,
				},
				process.env.JWT_SECRET
			);
			return res.status(200).send(token);
		}
		res.sendStatus(401);
	} catch (error) {
		res.sendStatus(500);
	}
}

export { signUp, signIn };
