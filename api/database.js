import mysql from "mysql";

export const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "securepass",
    database: "securepass",
});