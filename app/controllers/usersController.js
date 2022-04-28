/*====================================================
 *                 Example Controller
 *====================================================
 * import { getData } from "../models/usersModel.js";
 *
 * export const Home = (req, res) => {
 *    getData((err, result) => {
 *        res.render("home", {
 *        result: result,
 *      });
 *    });
 *    res.render("home");
 * };
 *===================================================
 */

export const Home = (req, res) => {
  res.render("home");
};
