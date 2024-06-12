import { response } from "../components/response.js";
import { db } from "../../database/connection.js";
import jwt from 'jsonwebtoken'
// import dotenv from "dotenv"
// dotenv.config()

const login = (req, res) => {
  const { email , password } = req.body;
  const sql1 = `SELECT nama, email, role, password FROM tb_users where email = "${email}"`;
  if (!email || !password) {
    response(400, "data not found", "Priksa kembali input", res);
  } else {
    db.query(sql1, (err, result) => {
        console.log(result)
      if (result.length===0) {
        response(400, "Login failed", "Priksa Kembali Email dan Password", res);
      }else{
        if(email === result[0].email && password === result[0].password){
            req.session.result = result;
            const nama = result[0].nama
            const email = result[0].email
            const role = result[0].role
            const expiresIn= 60 * 60 * 1
            const accessToken = jwt.sign({nama, email, role}, process.env.ACCESS_TOKEN_SECRET,{
              expiresIn: expiresIn
            })
            response(200,accessToken,"berhasil login", res)
        }else{
            response(400, "Invalid", "Masukan email dan password dengan benar", res)
        }
      }
    });
  }
};

export {login}
