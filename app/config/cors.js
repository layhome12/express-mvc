import dotenv from "dotenv"

//Dotenv Load
dotenv.config()

//CORS Configuration
const corsOption = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ALLOW_ORIGIN);
  res.header("Access-Control-Allow-Methods", process.env.ALLOW_METHOD);
  res.header("Access-Control-Allow-Headers", process.env.ALLOW_HEADER);
  res.type("application/json");

  next();
};

export default corsOption;
