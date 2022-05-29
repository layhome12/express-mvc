import nodemailer from "nodemailer";
import dotenv from "dotenv";

//Env Load
dotenv.config();

const email = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "email@gmail.com",
    pass: "password",
  },
});

export default email;
