import express from "express";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import config from "./app/config/config.js";
import routerWeb from "./app/routes/web.js";
import routerApi from "./app/routes/api.js";
import corsOption from "./app/config/cors.js";

const app = express();

//Base URL
const url = config.baseUrl().url;
const port = config.baseUrl().port;

//Dotenv Load
dotenv.config();

//View Engine
app.set("views", path.join("app", "views"));
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
