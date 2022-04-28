import express from "express";
import path from "path";
import bodyParser from "body-parser";
import router from "./app/config/routes.js";

const app = express();

//View Engine
app.set("views", path.join("app", "views"));
app.set("view engine", "hbs");

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Public Load
app.use("/assets", express.static("public"));

app.use(router);

// listen on port
app.listen(8081, () => console.log("Server Running at http://localhost:8081"));
