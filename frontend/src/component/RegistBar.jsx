import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios"

// component
import Button from "./element/Button";

// icons
import { CgClose } from "react-icons/cg";

const RegistBar = (props) => {
  
const {hidenRegist, sethidenRegist, handleOpenLogin}=props
const [nama, setnama] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")

const reset = () =>{
  setemail(""),
  setnama(""),
  setpassword("")

}



const handleSubmit= async() =>{
  try {
    await axios.post("http://localhost:3000/signup",{
      nama,
      email,
      password
    })

  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className="w-[20.75rem] h-[33.68rem] bg-primary border border-secondary rounded-lg p-8" hidden={hidenRegist ? true:false}>
       <button className="absolute right-3 top-3 cursor-pointer" onClick={sethidenRegist}>
      <CgClose size={32} />
      </button>
      <h1 className="text-2xl font-semibold mb-8">
        Registrasi
      </h1>
      <div>
        <div>
          <form action="" className="flex flex-col">
            <label htmlFor="nama" className="hover:cursor-pointer">
              Nama
            </label>
            <input
            onChange={(e)=>setnama(e.target.value)}
              type="text"
              name="nama"
              id="nama"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-5"
            />
            <label htmlFor="email" className="hover:cursor-pointer">
              Email
            </label>
            <input
            onChange={(e)=>setemail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-7"
            />
            <label htmlFor="password" className="hover:cursor-pointer">
              Password
            </label>
            <input
            onChange={(e)=>setpassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-6"
            />
            <Button className="bg-primary" onClick={handleSubmit}>Buat Akun</Button>
          </form>
        </div>
      </div>
      <div className="flex-col flex gap-3 mt-7">
        <h1>
          Sudah Punya Akun? <button onClick={handleOpenLogin}>Login</button>
        </h1>
      </div>
    </div>
  );
};

export default RegistBar;
