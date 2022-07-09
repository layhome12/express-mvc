import express from "express";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import config from "./src/config/config.js";
import routerWeb from "./src/routes/web.js";
import routerApi from "./src/routes/api.js";
import corsOption from "./src/config/cors.js";

const app = express();

//Base URL
const url = config.baseUrl().url;
const port = config.baseUrl().port;

//Dotenv Load
dotenv.config();

//View Engine
app.set("views", path.join("src", "views"));
app.set("view engine", "hbs");

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Cookie Parser
app.use(cookieParser());

//Public Load
app.use("/assets", express.static("public"));

//Routes
app.use("/", routerWeb);
app.use("/api", corsOption, routerApi);

// Listen on port
app.listen(port, () =>
  console.log(`Server Running at ${url}`)
);
