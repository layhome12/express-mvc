import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import systemApi from "../libraries/systemApi.js";

import usersModel from "../models/usersModel.js";

//Dotenv Load
dotenv.config();

export const generateToken = async (res, userData) => {
  //Generate Access Token
  let accessToken = jwt.sign(
    {
      id: userData.id,
      username: userData.username,
    },
    process.env.ACCESS_SECRET_TOKEN,
    {
      expiresIn: "30s",
    }
  );

  //Generate Access Token
  let refreshToken = jwt.sign(
    {
      id: userData.id,
      username: userData.username,
    },
    process.env.REFRESH_SECRET_TOKEN,
    {
      expiresIn: "12h",
    }
  );

  //Update Token Refresh
  await usersModel.update(
    {
      _token: refreshToken,
    },
    {
      where: {
        id: userData.id,
      },
    }
  );

  //Set Cookie Token
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 12 * 60 * 60 * 1000,
  });

  return accessToken;
};

export const refreshToken = async (res, cookieToken) => {
  let userData = await usersModel.findOne({
    where: {
      _token: cookieToken,
    },
    attributes: ["id", "_token", "username"],
  });

  //Check is Valid
  if (!userData) {
    return systemApi.jsonResponse(
      res,
      {
        statusCode: 403,
        message: "Refresh token is not valid",
      },
      403
    );
  }

  //Generate Access Token
  let accessToken = jwt.sign(
    {
      id: userData.id,
      username: userData.username,
    },
    process.env.ACCESS_SECRET_TOKEN,
    {
      expiresIn: "30s",
    }
  );

  return accessToken;
};

export const destroyToken = async (res, cookieToken) => {
  let userData = await usersModel.findOne({
    where: {
      _token: cookieToken,
    },
    attributes: ["id", "_token", "username"],
  });

  //Check is Valid
  if (!userData) {
    return systemApi.jsonResponse(
      res,
      {
        statusCode: 403,
        message: "Refresh token is not valid",
      },
      403
    );
  }

  //Update Token Refresh
  await usersModel.update(
    {
      _token: null,
    },
    {
      where: {
        id: userData.id,
      },
    }
  );

  res.clearCookie("refreshToken");

  return true;
};
