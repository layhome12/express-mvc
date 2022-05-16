/*====================================================
 *                 Example Controller
 *====================================================
 * import usersModel from "../models/usersModel.js";
 * import systemApi from "../../library/systemApi.js";
 *
 * let userController;
 *
 * const index = (req, res) => {
 *   usersModel.getData((err, result) => {
 *     systemApi.jsonResponse(res, result);
 *   });
 * };
 *
 * export default userController = {
 *  index,
 * };
 *===================================================
 */
import usersModel from "../../models/usersModel.js";
import systemApi from "../../library/systemApi.js";

let userController;

const index = (req, res) => {
  usersModel.getData((err, result) => {
    systemApi.jsonResponse(res, {
      statusCode: 200,
      listData: result,
    });
  });
};

const show = (req, res) => {
  let id = req.params.id;
  usersModel.getDataId(id, (err, result) => {
    systemApi.jsonResponse(res, {
      statusCode: 200,
      listData: result,
    });
  });
};

const store = (req, res) => {
  let data = req.body;
  usersModel.insertData(data, (err, result) => {
    systemApi.jsonResponse(res, {
      statusCode: 200,
      message: "Data is Created",
    });
  });
};

const update = (req, res) => {
  let id = req.params.id;
  let data = req.body;
  usersModel.updateData(data, id, (err, result) => {
    systemApi.jsonResponse(res, {
      statusCode: 200,
      message: "Data is Updated",
    });
  });
};

const destroy = (req, res) => {
  let id = req.params.id;
  usersModel.deleteData(id, (err, result) => {
    systemApi.jsonResponse(res, {
      statusCode: 200,
      message: "Data is Deleted",
    });
  });
};

export default userController = {
  index,
  show,
  store,
  update,
  destroy,
};
