import React, { useState, useEffect } from "react";
import { getRole } from "../services/auth.services";

const token = localStorage.getItem("token");

const Proker = ({ no, kegiatan, waktu, deskripsi, action }) => {
  const [isAdmin, setisAdmin] = useState("");
  const [canEdit, setcanEdit] = useState(false);

  const handleAdmin = () => {
    if (isAdmin === "admin") {
      setcanEdit(true);
    }else{
      setcanEdit(false)
    }
  };

  useEffect(() => {
    setisAdmin(getRole(token));
    handleAdmin()
  }, [isAdmin]);

  return (
    <tr className="text-center">
      <td className="border-2 border-black lg:px-5 lg:py-2  ">{no}</td>
      <td className="border-2 border-black lg:px-5 lg:py-2">{kegiatan}</td>
      <td className="border-2 border-black lg:px-5 lg:py-2">{waktu}</td>
      <td className="border-2 border-black lg:px-5 lg:py-2 text-wrap w-[35rem]">
        {deskripsi}
      </td>
      <td className="border-2 border-black lg:px-5 lg:py-2 " hidden={!canEdit}>{action}</td>
    </tr>
  );
};
export default Proker;
