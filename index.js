import express from "express";
import path from "path";
import bodyParser from "body-parser";
import routerWeb from "./app/routes/web.js";
import routerApi from "./app/routes/api.js";

const app = express();

//View Engine
app.set("views", path.join("app", "views"));
app.set("view engine", "hbs");

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Public Load
app.use("/assets", express.static("public"));

//Routes
app.use("/", routerWeb);
app.use("/api", routerApi);

// listen on port
app.listen(8081, () => console.log("Server Running at http://localhost:8081"));
