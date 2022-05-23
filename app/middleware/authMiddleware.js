import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import systemApi from "../libraries/systemApi.js";

//Dotenv Load
dotenv.config();

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const tokenHeader = authHeader && authHeader.split(" ")[1];

  if (tokenHeader == null) {
    return systemApi.jsonResponse(
      res,
      {
        statusCode: 401,
        message: "Authorization Required",
      },
      401
    );
  }

  jwt.verify(tokenHeader, process.env.ACCESS_SECRET_TOKEN, (err, decode) => {
    if (err) {
      return systemApi.jsonResponse(
        res,
        {
          statusCode: 403,
          message: "Bearer token is not valid",
        },
        403
      );
    }

    next();
  });
};
