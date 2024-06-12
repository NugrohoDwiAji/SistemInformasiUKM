import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataUkm from "../data/DetailUkm.json";
import Button from "../component/element/Button";
import Proker from "../component/Proker";
import { IoClose } from "react-icons/io5";
import CardConfirm from "../component/CardConfirm";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { UploudSpreadSheet, getEmail, getRole } from "../services/auth.services";
import TextareaAutoSize from "react-textarea-autosize";
import { getDataUser } from "../services/auth.services";
import axios from "axios";

const token = localStorage.getItem("token");

const DetailUkm = () => {
  const [dataUkm, setdataUkm] = useState(null);
  const [hidenProker, sethidenProker] = useState(true);
  const [hiddenConfirm, sethiddenConfirm] = useState(true);
  const [hiddenSucces, sethiddenSucces] = useState(true);
  const [isAdmin, setisAdmin] = useState("");
  const [cantEdit, setcantEdit] = useState(true);
  const [isEditing, setisEditing] = useState(false);
  const [email, setemail] = useState("");
  const [dataProfile, setdataProfile] = useState({
    email: "",
    nama: "",
    nim: "",
    prodi: "",
    angkatan: "",
    noTlp: "",
  });
  const { id } = useParams();

  const handleSucces = () => {
    sethiddenConfirm(true);
    sethiddenSucces(false);
    setTimeout(() => {
      sethiddenSucces(true);
    }, 1500);
  };

  const handleEditing = () => {
    setisEditing(!isEditing);
  };

  const handleAdmin = () => {
    if (isAdmin === "admin") {
      setcantEdit(false);
    } else {
      setcantEdit(true);
    }
  };

  const handleUploudSpreadSheet = () =>{
    console.log(dataProfile)
    UploudSpreadSheet(dataProfile, (res)=>{
      if(!res){
        console.log("Eror")
      }else{
        handleSucces()
        console.log("Success")
      }
    })
  }

  const getDataMahasiswa = async () => {
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
        });
      }
    });
  };

  useEffect(() => {
    if (id) {
      const getDataUkm = DataUkm.find((item) => item.id === parseInt(id));
      setdataUkm(getDataUkm);
    }
  }, [id]);

  useEffect(() => {
    setisAdmin(getRole(token));
    setemail(getEmail(token));
    handleAdmin();
    getDataMahasiswa();
  }, [isAdmin]);

  console.log(email);

  return (
    <div className="flex flex-col lg:flex-row  bg-white">
      <div className="lg:w-1/2 lg: p-5 relative ">
        <img
          src={dataUkm?.img}
          alt=""
          className=" w-full h-full lg:rounded-2xl"
        />
      </div>
      <form className="lg:pt-10 lg:px-16 px-5 py-5 lg:w-1/2 bg-primary md:border-l-2 border-t-2 border-black relative">
        <label
          hidden={cantEdit}
          htmlFor="imgUkm"
          className={`${
            isEditing ? " " : "hidden"
          } px-5 py-2 bg-primary rounded-md border-2 border-dashed border-black cursor-pointer absolute lg:top-[22rem] lg:-left-[26rem] hover:scale-105 hover:shadow-xl`}
        >
          Choose File...
        </label>
        <input type="file" name="imgUkm" id="imgUkm" hidden={true} />
        <h1 className="md:text-4xl text-lg font-bold md:mb-5 mb-2 font-lexend">
          UKM {dataUkm?.name}
        </h1>
        <h2 className="md:text-2xl text-base font-semibold mb-3 font-lexend">
          Tentang Kami
        </h2>
        <div className="text-justify w-full md:text-lg md:mb-3 mb-2 relative">
          <TextareaAutoSize
            value={dataUkm?.tentang}
            className={`w-full bg-none resize-none outline-none ${
              isEditing ? "bg-gray-200 p-3 rounded-xl" : "bg-transparent"
            } `}
            placeholder="Masukan Tentang UKM anda..."
            minRows={4}
            readOnly={!isEditing}
          ></TextareaAutoSize>
        </div>
        <h2 className="md:text-2xl font-semibold md:mb-3 font-lexend">
          Visi & Misi
        </h2>
        <div className="text-justify md:text-lg  w-full relative">
          <TextareaAutoSize
            readOnly={!isEditing}
            value={dataUkm?.visi}
            minRows={4}
            placeholder="Masukan Visi Misi UKM anda..."
            className={`w-full bg-none resize-none outline-none ${
              isEditing ? "bg-gray-200 p-3 rounded-xl" : "bg-transparent"
            } `}
          ></TextareaAutoSize>
        </div>
        <div className="md:mb-40 mt-5 flex gap-5 mb-20">
          <div hidden={!cantEdit}>
            <Button
              className="bg-primary"
              onClick={() => sethiddenConfirm(false)}
              type="button"
            >
              Daftar Sekarang
            </Button>
          </div>
          <Button
            onClick={() => sethidenProker(false)}
            type="button"
            className="bg-primary"
          >
            Lihat Proker
          </Button>
          <div hidden={cantEdit}>
            <div className="flex gap-5">
              <Button
                type="button"
                onClick={handleEditing}
                className="bg-primary"
              >
                {isEditing ? "Simpan" : "Edit"}
              </Button>
              <Button type="button" className="bg-primary">
                Input Proker
              </Button>
            </div>
          </div>
        </div>
        <img
          src={dataUkm?.bg1}
          alt="eror"
          className="absolute bottom-0 right-3 md:h-36 h-24"
        />
        <img
          src={dataUkm?.bg2}
          alt="eror"
          className="absolute bottom-0 left-3 md:h-36 h-24"
        />
      </form>
      <div
        className={`lg:h-[500px] w-screen fixed flex flex-col gap-3  items-center z-50 ${
          hidenProker ? "hidden" : ""
        } `}
      >
        <IoClose
          size={50}
          className="hover:scale-105 hover:shadow-xl hover:cursor-pointer"
          onClick={() => sethidenProker(!hidenProker)}
        />
        <table className="bg-white lg:text-xl ">
          <thead className="font-semibold text-center bg-primary ">
            <tr>
              <td className="border-2 border-secondary lg:p-5">No</td>
              <td className="border-2 border-secondary lg:p-5">
                Nama Kegiatan
              </td>
              <td className="border-2 border-secondary lg:p-5">Waktu</td>
              <td className="border-2 border-secondary lg:p-5">Keterangan</td>
              <td className="border-2 border-secondary lg:p-5">Action</td>
            </tr>
          </thead>
          <tbody>
            {dataUkm?.proker.map((item, index) => (
              <Proker
                no={index + 1}
                kegiatan={item.kegiatan}
                waktu={item.waktu}
                deskripsi={item.deskripsi}
                key={item.prokerId}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={`flex fixed w-screen justify-center top-44 ease-in-out duration-300 ${
          hiddenConfirm ? "hidden" : ""
        }`}
      >
        <CardConfirm
          sethiddenConfirm={() => sethiddenConfirm(true)}
          handleSucces={handleUploudSpreadSheet}
        />
      </div>
      <div
        className={`flex flex-col fixed w-full items-center top-44 ease-in-out duration-300 text-green-600  ${
          hiddenSucces ? "hidden" : ""
        }`}
      >
        <div className="bg-white px-7 py-2 rounded-2xl w-fit flex flex-col items-center border-4 border-primary">
          <IoMdCheckmarkCircleOutline size={120} />
          <h1 className="text-secondary   text-2xl font-semibold">
            Pendaftaran Berhasil!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DetailUkm;
