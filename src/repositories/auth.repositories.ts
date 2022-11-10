import { connection } from "../database/database.js";

async function insertUser(name, password) {
  return connection.query(
    "INSERT INTO users (name,password) VALUES ($1,$2);",
    [name, password]
  );
}

async function getUserByName(name) {
  return connection.query("SELECT * FROM users WHERE name = $1;", [name]);
}

export { insertUser, getUserByName };