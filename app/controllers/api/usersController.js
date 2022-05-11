/*====================================================
 *                 Example Controller
 *====================================================
 * import usersModel from "../models/usersModel.js";
 *
 * var userController;

 * const index = (req, res) => {
 * usersModel.getData((err, result) => {
 *     res.render("home", {
 *       result: result,
 *     });
 *   });
 * };
 * 
 * export default userController = {
 *  index,
 * };
 *===================================================
 */
import usersModel from "../../models/usersModel.js";

var userController;

const index = (req, res) => {
  usersModel.getData((err, result) => {
    res.end(
      JSON.stringify(
        {
          statusCode: 200,
          listData: result,
        },
        null,
        4
      )
    );
  });
};

const show = (req, res) => {
  res.render("home");
};

const store = (req, res) => {
  res.render("home");
};

const update = (req, res) => {
  res.render("home");
};

const destory = (req, res) => {
  res.render("home");
};

export default userController = {
  index,
  show,
  store,
  update,
  destory,
};
