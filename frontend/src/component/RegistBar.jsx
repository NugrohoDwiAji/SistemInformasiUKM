import React from "react";
import { Link } from "react-router-dom";

// component
import Button from "./element/Button";

// icons
import { CgClose } from "react-icons/cg";

const RegistBar = (props) => {
  const {hidenRegist, sethidenRegist, handleOpenLogin}=props
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
            <label htmlFor="nama depan" className="hover:cursor-pointer">
              Nama Depan
            </label>
            <input
              type="text"
              name="namaDepan"
              id="namaDepan"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-5"
            />
            <label htmlFor="Nama Belakang" className="hover:cursor-pointer">
              Nama Belakang
            </label>
            <input
              type="text"
              name="namaBelakang"
              id="namaBelakang"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-5"
            />
            <label htmlFor="email" className="hover:cursor-pointer">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-7"
            />
            <label htmlFor="password" className="hover:cursor-pointer">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-6"
            />
            <Button className="bg-primary">Buat Akun</Button>
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
