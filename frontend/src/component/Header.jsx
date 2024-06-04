import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LoginBar from "./LoginBar";
import RegistBar from "./RegistBar";
import ProfilBar from "./ProfilBar";
import { getUserName, isAuthenticated } from "../services/auth.services";


const Header = () => {
  const [hidenLogin, sethidenLogin] = useState(true);
  const [hidenRegist, sethidenRegist] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  const [profil, setprofil] = useState(false);
  const [nama, setnama] = useState("");



  const token = localStorage.getItem("token");

  const handleOpenRegist = () => {
    sethidenLogin(true);
    sethidenRegist(false);
  };
  const handleOpenLogin = () => {
    sethidenLogin(false);
    sethidenRegist(true);
  };

  useEffect(() => {
    setnama(getUserName(token));
    if (isAuthenticated()) {
      setisLogin(true);
    }
  }, []);



  return (
    <div className="h-16">
      <div className=" fixed top-0 right-0 left-0 bg-primary flex justify-between items-center h-16 py-2 border-b-2 border-secondary z-50 px-2 md:px-5">
        <div>
          <NavLink to={"/"} className={"md:hidden"}>
            <img src="/siu.png" alt="" className="h-7" />
          </NavLink>
        </div>
        <div className="flex gap-16 items-center md:text-base text-sm">
          <NavLink
            to={isAuthenticated()? "/about ":"/"}
            className={"hover:scale-105 hover:font-semibold "}
          >
            Informasi
          </NavLink>
          <NavLink to={"/"} className={"hidden md:block"}>
            <img src="/siu.png" alt="" className="md:h-12 h-7" />
          </NavLink>
          <NavLink
            to={isAuthenticated()?"/minat":"/"}
            className={"hover:scale-105 hover:font-semibold "}
          >
            Minat
          </NavLink>
        </div>
        <div>
          {!isLogin && (
            <button
              type="buton"
              onClick={() => sethidenLogin(false)}
              className={`border-none text-lg hover:scale-105 hover:font-semibold `}
            >
              Login
            </button>
          )}
          {isLogin && (
            <button
              type="buton"
              onClick={() => setprofil(true)}
              className={`border-none text-lg hover:scale-105 `}
            >
              Hi {nama}!
            </button>
          )}

          <div className="absolute top-0 right-0">
            <ProfilBar profil={profil} setprofil={() => setprofil(false)} />

            <LoginBar
              hidenLogin={hidenLogin}
              sethidenLogin={() => sethidenLogin(true)}
              handleOpenRegist={handleOpenRegist}
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
