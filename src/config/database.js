import { Sequelize } from "sequelize";
import dotenv from "dotenv";

//Dotenv Load
dotenv.config();

/*================================
 * Configure your database in here
 *================================
 */

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
    timezone: "+07:00",
  }
);

if (process.env.DB_CONN == "true") {
  try {
    await db.authenticate();
    console.log("Database connect successful..");
  } catch (err) {
    console.error(err);
  }
}

export default db;
