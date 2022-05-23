/*====================================================
 *                 Example Controller
 *====================================================
 * import usersModel from "../models/usersModel.js";
 *
 * const index = (req, res) => {
 * usersModel.getData((err, result) => {
 *     res.render("home", {
 *       result: result,
 *     });
 *   });
 * };
 *
 * export default {
 *  index,
 * };
 *===================================================
 */

const index = (req, res) => {
  res.render("home");
};

const debug = (req, res) => {
  res.send(null);
};

export default {
  index,
  debug,
};
