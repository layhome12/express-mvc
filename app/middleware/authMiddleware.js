import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import systemApi from "../libraries/systemApi.js";
import userModel from "../models/usersModel.js";

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
  
  //Verify Token
  jwt.verify(
    tokenHeader,
    process.env.ACCESS_SECRET_TOKEN,
    async (err, decode) => {
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

      //Check User Logout
      let userData = await userModel.findOne({
        where: {
          _token: tokenHeader,
        },
      });

      if (!userData || !userData._token) {
        return systemApi.jsonResponse(
          res,
          {
            statusCode: 403,
            message: "This user has been logged out",
          },
          403
        );
      }

      next();
    }
  );
};
