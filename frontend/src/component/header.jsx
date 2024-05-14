import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./element/Button";
import LoginBar from "./LoginBar";
import RegistBar from "./RegistBar";

const Header = () => {
  const [hidenLogin, sethidenLogin] = useState(true)
const [hidenRegist, sethidenRegist] = useState(true)
  const handleOpenRegist = () => {
    sethidenLogin(true)
    sethidenRegist(false)
  };
  const handleOpenLogin = () => {
    sethidenLogin(false)
    sethidenRegist(true)
  }

  return (
    <div className="h-16">
      <div className=" fixed top-0 right-0 left-0 bg-primary flex justify-between items-center h-16 py-2 border-b-2 border-secondary z-50">
        <div></div>
        <div className="flex gap-16 items-center">
          <NavLink to={"/about"}>Informasi</NavLink>
          <NavLink to={"/"}>
            <img src="/siu.png" alt="" className="h-12" />
          </NavLink>
          <NavLink to={"/minat"}>Minat</NavLink>
        </div>
        <div>
          <Button
            type="buton"
            onClick={() => sethidenLogin(false)}
            className="border-none text-lg"
          >
            Login
          </Button>
          <div className="absolute top-0 right-0">
            <LoginBar hidenLogin={hidenLogin} sethidenLogin={()=>sethidenLogin(true)} handleOpenRegist={handleOpenRegist}/>
            <RegistBar hidenRegist={hidenRegist} sethidenRegist={()=>sethidenRegist(true)} handleOpenLogin={handleOpenLogin}/>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
