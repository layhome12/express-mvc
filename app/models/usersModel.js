/*===================================================
 *                   Model Example
 *===================================================
 *   import db from "../config/database.js";
 *
 *   let usersModel;
 *
 *   const getData = (result) => {
 *     let sql = "SELECT * FROM users";
 *     db.query(sql, (err, results) => {
 *       if (err) throw err;
 *       result(null, results);
 *     });
 *   };
 *
 *   export default usersModel = {
 *     getData,
 *   };
 *==================================================
 */
import db from "../config/database.js";

let usersModel;

const getData = (result) => {
  let sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) throw err;
    result(null, results);
  });
};

const getDataId = (id, result) => {
  let sql = "SELECT * FROM users WHERE id=?";
  db.query(sql, [id], (err, results) => {
    if (err) throw err;
    result(null, results);
  });
};

const insertData = (data, result) => {
  let sql = "INSERT INTO users (username, password) VALUES (?,?)";
  db.query(sql, [data.username, data.password], (err, results) => {
    if (err) throw err;
    result(null, results);
  });
};

const updateData = (data, id, result) => {
  let sql = "UPDATE users SET username=?, password=? WHERE id=?";
  db.query(sql, [data.username, data.password, id], (err, results) => {
    if (err) throw err;
    result(null, results);
  });
};

const deleteData = (id, result) => {
  let sql = "DELETE FROM users WHERE id=?";
  db.query(sql, [id], (err, results) => {
    if (err) throw err;
    result(null, results);
  });
};

export default usersModel = {
  getData,
  getDataId,
  insertData,
  updateData,
  deleteData,
};
