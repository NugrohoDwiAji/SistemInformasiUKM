import express from "express";
const signupRouter = express.Router();
import { db } from "../../database/connection.js";
import { signUp } from "../controlers/registerController.js";

signupRouter
  .route("/")
  .get((req, res) => {
    db.query(sql,(err, result)=>{
        if(err) throw err;
        console.log(result[0].nama)
    })
  })
  .post(signUp);

export default signupRouter;
