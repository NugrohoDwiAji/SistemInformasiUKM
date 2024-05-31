import  mysql from "mysql2"

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_siu"
})



const testConnection=()=>{
    db.connect((err) =>{
        if(err){
            console.log('db connection error');
        }
        else{
            console.log("berhasil Connect")
        }
   })
}

export {testConnection , db}