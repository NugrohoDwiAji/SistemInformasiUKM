import express from "express";
import { login } from "../controlers/loginController.js";

const loginRouter = express.Router();

loginRouter
.route("/")
.post(login)

export default loginRouter