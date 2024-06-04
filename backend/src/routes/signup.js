import express from "express";
const signupRouter = express.Router();

import { signUp } from "../controlers/registerController.js";
signupRouter
  .route("/")
  .post(signUp);

export default signupRouter;
