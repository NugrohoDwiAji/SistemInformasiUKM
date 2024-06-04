import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";

// component
import Button from "./element/Button";

// icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { MdOutlineErrorOutline } from "react-icons/md";
import CardMsg from "./CardMsg";

const RegistBar = (props) => {
  const { hidenRegist, sethidenRegist, handleOpenLogin } = props;
  const [nama, setnama] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const [isMessage, setisMessage] = useState(false);
  const [iconMessage, seticonMessage] = useState(
    <MdOutlineErrorOutline size={100} color="red" />
  );
  const reset = () => {
    setemail(""), setnama(""), setpassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        nama,
        email,
        password,
      });
      setmessage(response.data.message);
      seticonMessage(<IoMdCheckmarkCircleOutline size={120} color="rgb(22 163 74)" />);
      setisMessage(true);
      setTimeout(() => {
        setisMessage(false);
        window.location.reload()
      }, 2000);
    } catch (error) {
      setmessage(error.response.data.message);
      setisMessage(true);
      setTimeout(() => {
        setisMessage(false);
      }, 2000);
    }
  };
  return (
    <div
      className="w-[20.75rem] h-[33.68rem] bg-primary border border-secondary rounded-lg p-8"
      hidden={hidenRegist ? true : false}
    >
      <button
        className="absolute right-3 top-3 cursor-pointer"
        onClick={sethidenRegist}
      >
        <CgClose size={32} />
      </button>
      <h1 className="text-2xl font-semibold mb-8">Registrasi</h1>
      <div>
        <div>
          <form action="" className="flex flex-col">
            <label htmlFor="nama" className="hover:cursor-pointer">
              Nama
            </label>
            <input
              onChange={(e) => setnama(e.target.value)}
              type="text"
              name="nama"
              id="nama"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-5"
            />
            <label htmlFor="email" className="hover:cursor-pointer">
              Email
            </label>
            <input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-7"
            />
            <label htmlFor="password" className="hover:cursor-pointer">
              Password
            </label>
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-6"
            />
            <Button className="bg-primary" onClick={handleSubmit}>
              Buat Akun
            </Button>
          </form>
        </div>
      </div>
      <div className="flex-col flex gap-3 mt-7">
        <h1>
          Sudah Punya Akun? <button onClick={handleOpenLogin}>Login</button>
        </h1>
      </div>
       {isMessage && <CardMsg iconMessage={iconMessage} message={message}/>}
    </div>
  );
};

export default RegistBar;
