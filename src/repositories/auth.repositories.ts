import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { UserEntity } from "../protocols/user.js";

async function insertUser(name:string, password:string):Promise<QueryResult> {
  return connection.query(
    "INSERT INTO users (name,password) VALUES ($1,$2);",
    [name, password]
  );
}

async function getUserByName(name:string):Promise<QueryResult<UserEntity>> {
  return connection.query("SELECT * FROM users WHERE name = $1;", [name]);
}

export { insertUser, getUserByName };