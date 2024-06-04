import express from "express";
const signupRouter = express.Router();
import { db } from "../../database/connection.js";
<<<<<<< HEAD
import { signUp } from "../controlers/registerController.js";
=======
import { response } from "../components/response.js";
>>>>>>> dom

signupRouter
  .route("/")
  .get((req, res) => {
    db.query(sql,(err, result)=>{
        if(err) throw err;
        console.log(result[0].nama)
    })
  })
<<<<<<< HEAD
  .post(signUp);
=======
  .post((req, res) => {
    const { nama, email, password } = req.body;
    const sql = `INSERT INTO tb_users (nama, email, password, role) VALUES ("${nama}","${email}","${password}","user")`;
    if (!nama||!email||!password){
        response(400,"data not found","Priksa kembali input",res)
    }
    const sql2 = `SELECT nama, email, password FROM tb_users where nama = "${nama}"`

    db.query(sql2,(err, result)=>{
        if(result[0].email === email){
            response(400,"email is already","Priksa kembali email anda",res)
        }else{
            db.query(sql, (err, result) => {
              if (err) response(500, "invalid", "Code Eror", res);
              if (result?.affectedRows) {
                const data = {
                  usSucces: result.affectedRows,
                  id: result.insertId,
                };
                response(200, data, "Succes Full", res);
              }
            });
        }

    })

  });
>>>>>>> dom

export default signupRouter;
