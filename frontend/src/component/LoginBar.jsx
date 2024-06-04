import React, { useState } from "react";
import { Link } from "react-router-dom";

// Coponent
import Button from "./element/Button";

// Icon
import { CgClose } from "react-icons/cg";
import { login } from "../services/auth.services";


const LoginBar = (props) => {
  const { hidenLogin, sethidenLogin, handleOpenRegist, setLogin } = props;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlLogin = async () => {
    const data = {
      email,
      password,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.reload()
      }else{
        console.log(res.response.data.message)
      }
    });
  };

  return (
    <div
      className={`w-[20.75rem] h-[33.68rem] bg-primary border-2 border-secondary rounded-l-lg p-8`}
      hidden={hidenLogin ? true : false}
    >
      <button
        className={`absolute right-3 top-3 cursor-pointer`}
        onClick={sethidenLogin}
      >
        <CgClose size={32} />
      </button>

      <h1 className="text-2xl font-semibold mb-20">Login</h1>
      <div>
        <div>
          <form action="" className="flex flex-col">
            <label htmlFor="email-login" className="hover:cursor-pointer">
              Email
            </label>
            <input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
              id="email-login"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-7"
            />
            <label htmlFor="password-login" className="hover:cursor-pointer">
              Password
            </label>
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              name="password"
              id="password-login"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-6"
            />
            <Button className="bg-primary" type="button" onClick={handlLogin}>
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="flex-col flex gap-3 mt-12">
        <Link>Lupa Kata Sandi?</Link>
        <button onClick={handleOpenRegist} className="text-start">
          Buat Akun
        </button>
      </div>
  
    </div>
  );
};

export default LoginBar;
