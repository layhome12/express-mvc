import mysql from "mysql";

/*================================
 * Configure your database in here
 *================================
 */

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connect successfull..");
});

export default db;
