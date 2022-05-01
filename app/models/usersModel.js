import db from "../config/database.js";

/*=======================================
 *            Model Example
 *=======================================
 
 *=======================================
 */
var usersModel;

const getData = (result) => {
  let sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) throw err;
    result(null, results);
  });
};

export default usersModel = {
  getData,
};
