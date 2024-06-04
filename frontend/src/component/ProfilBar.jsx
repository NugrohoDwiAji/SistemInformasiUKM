import React, { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { getDataUser, getEmail, updateProfil } from "../services/auth.services";
import Button from "./element/Button";
import axios from "axios";

const token = localStorage.getItem("token");

const ProfilBar = ({ profil, setprofil, setLogin }) => {
  const [isEditing, setisEditing] = useState(true);
  const [email, setemail] = useState("");
  const [privew, setprivew] = useState("");
  const [dataProfile, setdataProfile] = useState({
    email: "",
    nama: "",
    nim: "",
    prodi: "",
    angkatan: "",
    noTlp: "",
    file:null
  });


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setprivew(URL.createObjectURL(file));
    setdataProfile(prevProfile => ({
        ...prevProfile,
        file: file,
    }));
};


  const handleChange = (event) => {
    const { name, value } = event.target;
    setdataProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const getData = async () => {
    getDataUser(email, (res) => {
      if (!res) {
        console.log("eror");
      } else {
        setdataProfile({
          email: res.email,
          nama: res.nama,
          nim: res.nim,
          prodi: res.prodi,
          angkatan: res.angkatan,
          noTlp: res.noTlp,
          file: res.url,
        });
      }
    });
  };

  const handleUpdate = () => {
    console.log(dataProfile)
    updateProfil(dataProfile, (res) => {
      if (!res) {
        console.log("eror");
      } else {
        getData();
        console.log(res);
      }
    });
  };

  const handleEditing = () => {
    setisEditing(!isEditing);

    if (isEditing === false) {
      handleUpdate();
    }
  };

  useEffect(() => {
    setemail(getEmail(token));
    getData();
  }, [email]);

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

      <h1 className="text-2xl font-semibold mb-5">{dataProfile.nama}</h1>
      <div className="flex justify-center">
        <img
          src={privew? privew : dataProfile.file}
          alt={"none"}
          className="h-28 w-28 bg-red-400 rounded-full mb-5"
        />
      </div>
      <div>
        <form action="" className="flex flex-col">
          <div hidden={isEditing}>
            <label
              htmlFor="file"
              className={`top-32 left-28 flex justify-center -mt-10 hover:cursor-pointer`}
            >
              <input
                type="file"
                name="file"
                id="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <h1 className="px-2 bg-gray-400 w-fit border rounded-lg">
                Chose file
              </h1>
            </label>
          </div>
          <div className="flex justify-between">
            <label htmlFor="nama" className="min-w-24 ">
              Nama
            </label>
            <input
              type="text"
              value={dataProfile.nama}
              name="nama"
              id="nama"
              className={`${
                isEditing
                  ? "bg-primary border-b-2 border-secondary"
                  : "bg-opacity-80 bg-white"
              } rounded-sm p-1 outline-none flex items-center h-6  mb-3  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="nim" className="min-w-24 ">
              NIM
            </label>
            <input
              type="text"
              value={dataProfile.nim}
              name="nim"
              id="nim"
              className={`${
                isEditing
                  ? "bg-primary border-b-2 border-secondary"
                  : "bg-opacity-80 bg-white"
              } rounded-sm p-1 outline-none flex items-center h-6  mb-3  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="prodi" className="min-w-24 ">
              Prodi
            </label>
            <input
              type="text"
              value={dataProfile.prodi}
              name="prodi"
              id="prodi"
              className={`${
                isEditing
                  ? "bg-primary border-b-2 border-secondary"
                  : "bg-opacity-80 bg-white"
              } rounded-sm p-1 outline-none flex items-center h-6  mb-3  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="angkatan" className="min-w-24 ">
              Angkatan
            </label>
            <input
              type="text"
              value={dataProfile.angkatan}
              name="angkatan"
              id="angkatan"
              className={`${
                isEditing
                  ? "bg-primary border-b-2 border-secondary"
                  : "bg-opacity-80 bg-white"
              } rounded-sm p-1 outline-none flex items-center h-6  mb-3  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="noTelp" className="min-w-24 ">
              No Telp
            </label>
            <input
              type="text"
              value={dataProfile.noTlp}
              name="noTlp"
              id="noTlp"
              className={`${
                isEditing
                  ? "bg-primary border-b-2 border-secondary"
                  : "bg-opacity-80 bg-white"
              } rounded-sm p-1 outline-none flex items-center h-6  mb-6  w-44 text-right`}
              onChange={handleChange}
              readOnly={isEditing}
            />
          </div>
        </form>
        <div className="flex gap-5">
          <Button className="bg-primary" type="button" onClick={handleEditing}>
            {isEditing ? "Edit" : "Simpan"}
          </Button>
          <Button
            className="bg-secondary text-primary"
            type="button"
            onClick={handleLogOut}
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilBar;
