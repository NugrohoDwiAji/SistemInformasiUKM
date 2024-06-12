import { db } from "../../database/connection.js";
import { response } from "../components/response.js";


export const createUkm = (req, res) => {
  const { nama, deskripsi} = req.body;
  const file = req.file.filename
  const link = `/detailUkm/${nama}`;
  const logo = `${req.protocol}://${req.get("host")}/img/${file}`
  const sql =
    "INSERT INTO tb_ukm (nama, deskripsi, logo, link) VALUES (?, ?, ?, ?)";
  const sql2 = "INSERT INTO tb_detailukm (id_ukm, id_proker) VALUES (?, ?)";
  const sql3 = "INSERT INTO tb_proker (nama) VALUES (?)";
  db.query(sql, [nama, deskripsi, logo, link], (err, result) => {
    if (err) throw err;
    if (result?.insertId) {
      const id = result.insertId;
      db.query(sql3,[" "], (err, result) => {
        if (err) throw err;
        if (result?.affectedRows) {
          const id_proker = result.insertId;
          db.query(sql2, [id, id_proker], (err, result) => {
            if (err) {
              response(500, err, "code eror", res);
            } else {
              response(201, result, "succses", res);
            }
          });
        }
      });
    }
  });
};

// update

export const updateDetailUkm = (req,res)=>{
  const file = req.file.filename
  const img = `${req.protocol}://${req.get("host")}/img/${file}`
  const {tentang, visi, id_ukm} = req.body;
  const sql = "UPDATE tb_detailukm SET img = ?, visi = ?, tentang = ? WHERE id_ukm = ?" 

  db.query(sql, [img, visi, tentang, id_ukm], (err, result)=>{
    if (err) response(500, "invalid", "code eror", res);
    if(result?.affectedRows){
      response(200, result,"Update Succesfull", res)
    }
  })
}

