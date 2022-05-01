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

var homeController;

const index = (req, res) => {
  res.render("home");
};

export default homeController = {
  index,
};
