import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./element/Button";
import LoginBar from "./LoginBar";
import RegistBar from "./RegistBar";
import ProfilBar from "./ProfilBar";

const Header = () => {
  const [hidenLogin, sethidenLogin] = useState(true);
  const [hidenRegist, sethidenRegist] = useState(true);
  const [profil, setprofil] = useState(false);
  const [login, setLogin] = useState(false);
  const handleOpenRegist = () => {
    sethidenLogin(true);
    sethidenRegist(false);
  };
  const handleOpenLogin = () => {
    sethidenLogin(false);
    sethidenRegist(true);
  };

  // hanya sementara
  const handleLogin = () => {
    setLogin(true);
    sethidenLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
    setprofil(false);
  };

  return (
    <div className="h-16">
      <div className=" fixed top-0 right-0 left-0 bg-primary flex justify-between items-center h-16 py-2 border-b-2 border-secondary z-50 px-2">
        <div>
          <NavLink to={"/"} className={"md:hidden"}>
            <img src="/siu.png" alt="" className="h-7" />
          </NavLink>
        </div>
        <div className="flex gap-16 items-center md:text-base text-sm">
          <NavLink to={"/about"}>Informasi</NavLink>
          <NavLink to={"/"} className={"hidden md:block"}>
            <img src="/siu.png" alt="" className="md:h-12 h-7" />
          </NavLink>
          <NavLink to={"/minat"}>Minat</NavLink>
        </div>
        <div>
          <Button
            type="buton"
            onClick={() => sethidenLogin(false)}
            className={`border-none text-lg ${login ? "hidden" : ""} `}
          >
            Login
          </Button>
          <Button
            type="buton"
            onClick={() => setprofil(true)}
            className={`border-none text-lg ${login ? " " : "hidden"} `}
          >
            Hi Irene
          </Button>

          <div className="absolute top-0 right-0">
            <ProfilBar
              setLogin={handleLogout}
              profil={profil}
              setprofil={() => setprofil(false)}
            />
            <LoginBar
              hidenLogin={hidenLogin}
              sethidenLogin={() => sethidenLogin(true)}
              handleOpenRegist={handleOpenRegist}
              setLogin={handleLogin}
            />
            <RegistBar
              hidenRegist={hidenRegist}
              sethidenRegist={() => sethidenRegist(true)}
              handleOpenLogin={handleOpenLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
