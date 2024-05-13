import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./element/Button";

const Header = () => {
  return (
    <div className="h-16">
    <div className=" fixed top-0 right-0 left-0 bg-primary flex justify-between items-center h-16 py-2 border-b-2 border-secondary z-50">
      <div></div>
      <div className="flex gap-16 items-center">
        <NavLink to={""}>Informasi</NavLink>
        <NavLink to={"/"}>
          <img src="/siu.png" alt="" className="h-12" />
        </NavLink>
        <NavLink to={"/minat"}>Minat</NavLink>
      </div>
      <div>
        <Button className="border-none text-lg">Login</Button>
      </div>
    </div>
    </div>
  );
};

export default Header;