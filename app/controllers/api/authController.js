import bcrypt from "bcrypt";
import systemApi from "../../libraries/systemApi.js";
import {
  generateToken,
  refreshToken,
  destroyToken,
} from "../../libraries/authJWT.js";

import userModel from "../../models/usersModel.js";

let authController;

const auth = async (req, res) => {
  let data = req.body;
  let userData = await userModel.findOne({
    where: {
      username: data.username,
    },
  });

  //Username Check
  if (!userData) {
    return systemApi.jsonResponse(
      res,
      {
        statusCode: 404,
        message: "Username or password not correct",
      },
      404
    );
  }

  //Password Check
  let confirm = await bcrypt.compare(data.password, userData.password);
  if (!confirm) {
    return systemApi.jsonResponse(
      res,
      {
        statusCode: 404,
        message: "Username or password not correct",
      },
      404
    );
  }

  return systemApi.jsonResponse(
    res,
    {
      statusCode: 200,
      message: "Login Successful..",
      token_access: await generateToken(res, userData),
    },
    200
  );
};

const refreshAuth = async (req, res) => {
  let cookieToken = req.cookies.refreshToken;
  if (!cookieToken) {
    return systemApi.jsonResponse(
      res,
      {
        statusCode: 401,
        message: "Refresh token is required",
      },
      401
    );
  }

  let tokenAccess = await refreshToken(res, cookieToken);
  return systemApi.jsonResponse(res, {
    statusCode: 200,
    message: "Generate token successful..",
    token_access: tokenAccess,
  });
};

const logout = async (req, res) => {
  let cookieToken = req.cookies.refreshToken;
  await destroyToken(res, cookieToken);

  return systemApi.jsonResponse(res, {
    statusCode: 200,
    message: "Logout successful..",
  });
};

export default authController = {
  auth,
  refreshAuth,
  logout
};
