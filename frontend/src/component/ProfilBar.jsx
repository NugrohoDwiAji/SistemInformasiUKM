import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

import Button from "./element/Button";

const ProfilBar = ({ profil, setprofil, setLogin }) => {
  const [profilData, setprofilData] = useState({
    username: "irene",
    nim:"2101020042",
    prodi:"Teknik Informatika",
    angkatan:"2023",
    noTelp:"081XXXXXXXXX"
  });
  const [isEditing, setisEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setprofilData({
      ...profilData,
      [name]: value,
    });
  };
  const handleEditing = () => {
    setisEditing(!isEditing);
  };
  return (
    <div
      className={`w-[20.75rem] h-[33.68rem] bg-primary border-2 border-secondary rounded-l-lg p-8`}
      hidden={profil ? false : true}
    >
      <button
        className={`absolute right-3 top-3 cursor-pointer`}
        onClick={setprofil}
      >
        <CgClose size={32} />
      </button>

      <h1 className="text-2xl font-semibold mb-5">Hi Irene</h1>
      <div className="flex justify-center">
        <img
          src="./profil-irene.png"
          alt="Eror"
          className="h-28 w-28 bg-red-400 rounded-full mb-5"
        />
      </div>
      <div>
        <form action="" className="flex flex-col">
        <div className="flex justify-between">
            <label htmlFor="nama" className="min-w-24 ">Nama</label>
            <input
              type="text"
              value={profilData.username}
              name="username"
              id="nama"
              className={`${isEditing?"bg-primary border-b-2 border-secondary":"bg-opacity-80 bg-white"} rounded-sm p-1 outline-none flex items-center h-6  mb-3  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="nim" className="min-w-24 ">NIM</label>
            <input
              type="text"
              value={profilData.nim}
              name="nim"
              id="nim"
              className={`${isEditing?"bg-primary border-b-2 border-secondary":"bg-opacity-80 bg-white"} rounded-sm p-1 outline-none flex items-center h-6  mb-3  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="prodi" className="min-w-24 ">Prodi</label>
            <input
              type="text"
              value={profilData.prodi}
              name="prodi"
              id="prodi"
              className={`${isEditing?"bg-primary border-b-2 border-secondary":"bg-opacity-80 bg-white"} rounded-sm p-1 outline-none flex items-center h-6  mb-3  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="angkatan" className="min-w-24 ">Angkatan</label>
            <input
              type="text"
              value={profilData.angkatan}
              name="angkatan"
              id="angkatan"
              className={`${isEditing?"bg-primary border-b-2 border-secondary":"bg-opacity-80 bg-white"} rounded-sm p-1 outline-none flex items-center h-6  mb-3  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="noTelp" className="min-w-24 ">No Telp</label>
            <input
              type="text"
              value={profilData.noTelp}
              name="noTelp"
              id="noTelp"
              className={`${isEditing?"bg-primary border-b-2 border-secondary":"bg-opacity-80 bg-white"} rounded-sm p-1 outline-none flex items-center h-6  mb-6  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
        
        </form>
          <Button className="mb-12 mr-5" type="button" onClick={handleEditing}>
            {isEditing ? "Edit" : "Simpan"}
          </Button>
        <Button className="mb-12" type="button" onClick={setLogin}>
          Log out
        </Button>
      </div>
      <div className="flex-col flex gap-3"></div>
    </div>
  );
};

export default ProfilBar;
