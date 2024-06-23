import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../component/element/Button";
import Proker from "../component/Proker";
import { IoClose } from "react-icons/io5";
import CardConfirm from "../component/CardConfirm";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  UploudSpreadSheet,
  getEmail,
  getRole,
} from "../services/auth.services";
import TextareaAutoSize from "react-textarea-autosize";
import { getDataUser } from "../services/auth.services";
import { getDetailUkmByid, updateDetailUkm } from "../services/ukm.services";
import {
  createProker,
  deleteProker,
  getProker,
  getProkerById,
  updateProker,
} from "../services/proker.services";

const token = localStorage.getItem("token");

const DetailUkm = () => {
  const [hidenProker, sethidenProker] = useState(true);
  const [hiddenConfirm, sethiddenConfirm] = useState(true);
  const [hiddenSucces, sethiddenSucces] = useState(true);
  const [hiddenInputProker, sethiddenInputProker] = useState(true);
  const [isAdmin, setisAdmin] = useState("");
  const [cantEdit, setcantEdit] = useState(true);
  const [isEditing, setisEditing] = useState(false);
  const [email, setemail] = useState("");
  const [title, settitle] = useState("");
  const [preview, setpreview] = useState("");
  const [idUkm, setidUkm] = useState("");
  const [dataProker, setdataProker] = useState([]);
  const [isUpdate, setisUpdate] = useState(false);
  const [id_proker, setid_proker] = useState("");
  const [inputDataProker, setinputDataProker] = useState({
    nama: "",
    waktu: "",
    deskripsi: "",
  });
  const [dataUkm, setdataUkm] = useState({
    ukmimg: null,
    tentang: "",
    visi: "",
    bg1: null,
    bg2: null,
  });
  const [dataProfile, setdataProfile] = useState({
    email: "",
    nama: "",
    nim: "",
    prodi: "",
    angkatan: "",
    noTlp: "",
  });
  const { nama } = useParams();

  // ---FUNCTION---

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setpreview(URL.createObjectURL(file));
    setdataUkm((prevUkm) => ({
      ...prevUkm,
      ukmimg: file,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setdataUkm((prevUkm) => ({
      ...prevUkm,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    console.log(dataUkm);
    updateDetailUkm(dataUkm, idUkm, (res) => {
      if (!res) {
        console.log("eror");
      } else {
        getData();
        console.log(res);
      }
    });
  };

  const handleSucces = () => {
    sethiddenConfirm(true);
    sethiddenSucces(false);
    setTimeout(() => {
      sethiddenSucces(true);
    }, 1500);
  };

  const handleChangeProker = (event) => {
    const { name, value } = event.target;
    setinputDataProker((prevProker) => ({
      ...prevProker,
      [name]: value,
    }));
  };

  const handleSubmitProker = () => {
    console.log(inputDataProker);
    createProker(inputDataProker, nama, (res) => {
      if (!res) {
        console.log("eror");
      } else {
        console.log(res);
        sethiddenInputProker(!hiddenInputProker);
        getProker(nama, (res) => {
          setdataProker(res);
        });
      }
    });
  };

  const handleUpdateProker = (id_proker) => {
    getProkerById(id_proker, nama, (res) => {
      if (!res) {
        console.log("Eror");
      } else {
        setisUpdate(true);
        setinputDataProker({
          nama: res.nama,
          waktu: new Date(res.waktu).toISOString().split("T")[0],
          deskripsi: res.deskripsi,
        });
        setid_proker(id_proker);
        sethiddenInputProker(!hiddenInputProker);
      }
    });
  };

  const handleSendUpdateProker = () => {
    const data = {
      namaProker: inputDataProker.nama,
      waktu: inputDataProker.waktu,
      deskripsi: inputDataProker.deskripsi,
    };
    updateProker(id_proker, nama, data, (res) => {
      if (!res) {
        console.log("Eror");
      } else {
        console.log(res);
        sethiddenInputProker(!hiddenInputProker);
        getProker(nama, (res) => {
          setdataProker(res);
        });
      }
    });
  };

  const handleEditing = () => {
    setisEditing(!isEditing);

    if (isEditing === true) {
      handleUpdate();
    }
  };

  const handleAdmin = () => {
    if (isAdmin === "admin") {
      setcantEdit(false);
    } else {
      setcantEdit(true);
    }
  };

  const handleUploudSpreadSheet = () => {
    const data = {
      email: dataProfile.email,
      nama_mhs: dataProfile.nama,
      nim: dataProfile.nim,
      prodi: dataProfile.prodi,
      angkatan: dataProfile.angkatan,
      noTlp: dataProfile.noTlp,
      proker: title,
    };
    UploudSpreadSheet(data, (res) => {
      if (!res) {
        console.log("Eror");
      } else {
        handleSucces();
        console.log("Success");
      }
    });
  };

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
          noTlp: res.noTlp.toString(),
        });
      }
    });
  };

  useEffect(() => {
    if (!nama) {
      console.log("Eror");
      // const getDataUkm = DataUkm.find((item) => item.id === parseInt(id));
      // setdataUkm(getDataUkm);
    } else {
      getDetailUkmByid(nama, (res) => {
        setdataUkm({
          ukmimg: res.img,
          tentang: res.tentang,
          visi: res.visi,
          bg1: res.bg1,
          bg2: res.bg2,
        });
        settitle(res.nama);
        setidUkm(res.id_ukm);
      });
      getProker(nama, (res) => {
        setdataProker(res);
      });
    }
  }, [nama]);

  useEffect(() => {
    setisAdmin(getRole(token));
    setemail(getEmail(token));
    handleAdmin();
    getDataMahasiswa();
  }, [isAdmin]);

  const handleDelete = (id_proker, nama) => {
    if (id_proker && nama) {
      deleteProker(id_proker, nama, (res) => {
        console.log(res);
        getProker(nama, (res) => {
          setdataProker(res);
        });
      });
    } else {
      console.log(Eror);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  bg-white">
      <div className="lg:w-1/2 lg: p-5 relative ">
        <img
          src={preview ? preview : dataUkm?.ukmimg}
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
        <input
          type="file"
          name="imgUkm"
          id="imgUkm"
          hidden={true}
          onChange={handleFileChange}
        />
        <h1 className="md:text-4xl text-lg font-bold md:mb-5 mb-2 font-lexend">
          {title}
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
            name="tentang"
            readOnly={!isEditing}
            onChange={handleChange}
          ></TextareaAutoSize>
        </div>
        <h2 className="md:text-2xl font-semibold md:mb-3 font-lexend">
          Visi & Misi
        </h2>
        <div className="text-justify md:text-lg  w-full relative">
          <TextareaAutoSize
            onChange={handleChange}
            readOnly={!isEditing}
            value={dataUkm?.visi}
            name="visi"
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
              <Button
                type="button"
                className="bg-primary"
                onClick={() => sethiddenInputProker(!hiddenInputProker)}
              >
                Input Proker
              </Button>
            </div>
          </div>
        </div>
        <img
          src={dataUkm?.bg1}
          alt=""
          className="absolute bottom-0 right-3 md:h-36 h-24"
        />
        <img
          src={dataUkm?.bg2}
          alt=""
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
              <td
                className="border-2 border-secondary lg:p-5"
                hidden={cantEdit}
              >
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {dataProker.map((item, index) => (
              <Proker
                no={index + 1}
                kegiatan={item.nama}
                waktu={new Date(item.waktu).toISOString().split("T")[0]}
                deskripsi={item.deskripsi}
                key={item.id_proker}
                action={
                  <div className="flex gap-3">
                    <button
                      className="p-1 border-2 border-collapse  border-secondary rounded-md bg-primary text-secondary hover:scale-105 hover:shadow-lg"
                      onClick={() => handleUpdateProker(item.id_proker)}
                    >
                      Update
                    </button>
                    <button
                      className="p-1 border-2 border-collapse  border-secondary rounded-md bg-secondary text-primary hover:scale-105 hover:shadow-lg"
                      onClick={() => handleDelete(item.id_proker, nama)}
                    >
                      Delete
                    </button>
                  </div>
                }
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
      {/* input proker */}
      <div
        className="lg:h-[500px] w-screen fixed z-50"
        hidden={hiddenInputProker}
      >
        <div className="lg:h-[33rem] lg:w-[27rem] bg-white rounded-xl border-4 border-dashed border-secondary px-3 m-auto">
          <h1 className="my-8 text-center font-semibold text-2xl">
            INPUT PROKER {nama}
          </h1>
          <form className="flex flex-col gap-3">
            <div className="w-full justify-between flex">
              <label htmlFor="nama">Nama Kegiatan</label>
              <input
                value={inputDataProker.nama}
                onChange={handleChangeProker}
                name="nama"
                type="text"
                className="border-2 rounded-sm border-dashed border-primary outline-none p-1"
              />
            </div>
            <div className="w-full justify-between flex">
              <label htmlFor="waktu">Waktu terlaksana</label>
              <input
                value={inputDataProker?.waktu}
                onChange={handleChangeProker}
                id="waktu"
                name="waktu"
                type="date"
                className="border-2 rounded-sm border-dashed border-primary outline-none "
              />
            </div>
            <div className="w-full justify-between flex">
              <label htmlFor="deskripsi">Deskripsi</label>
              <textarea
                value={inputDataProker?.deskripsi}
                onChange={handleChangeProker}
                name="deskripsi"
                type=""
                className="border-2 rounded-sm h-44 w-72 border-dashed border-primary outline-none p-1"
              />
            </div>
          </form>
          <div className="flex gap-5 mt-10">
            <Button
              type="button"
              classNames="bg-primary"
              className="bg-primary"
              onClick={() => sethiddenInputProker(!hiddenInputProker)}
            >
              Kembali
            </Button>
            <Button
              onClick={isUpdate ? handleSendUpdateProker : handleSubmitProker}
              classNames="bg-primary"
              className="bg-primary"
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUkm;
