import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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
      expiresIn: "15m",
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
      expiresIn: "1h",
    }
  );

  //Update Token and Refresh
  await usersModel.update(
    {
      _token: accessToken,
      _refresh: refreshToken,
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
    maxAge: 24 * 60 * 60 * 1000,
  });

  return accessToken;
};

export const refreshToken = async (res, cookieToken) => {
  let userData = await usersModel.findOne({
    where: {
      _refresh: cookieToken,
    },
    attributes: ["id", "username"],
  });

  //Check is Valid
  if (!userData) return false;

  //Generate Access Token
  let accessToken = jwt.sign(
    {
      id: userData.id,
      username: userData.username,
    },
    process.env.ACCESS_SECRET_TOKEN,
    {
      expiresIn: "15m",
    }
  );

  //Update Token
  await usersModel.update(
    {
      _token: accessToken,
    },
    {
      where: {
        id: userData.id,
      },
    }
  );

  return accessToken;
};

export const destroyToken = async (res, cookieToken) => {
  let userData = await usersModel.findOne({
    where: {
      _refresh: cookieToken,
    },
    attributes: ["id", "_token", "username"],
  });

  //Check is Valid
  if (!userData) return false;

  //Update Token Refresh
  await usersModel.update(
    {
      _token: null,
      _refresh: null,
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
