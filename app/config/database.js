import mysql from "mysql";
import dotenv from "dotenv";

//Dotenv Load
dotenv.config();

/*================================
 * Configure your database in here
 *================================
 */

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

if (process.env.DB_HOST) {
  db.connect((err) => {
    if (err) throw err;
    console.log("Database connect successfull..");
  });
}

export default db;
