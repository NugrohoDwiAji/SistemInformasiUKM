import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataUkm from "../data/DetailUkm.json";
import Button from "../component/element/Button";
import Proker from "../component/Proker";
import { IoClose } from "react-icons/io5";

const DetailUkm = () => {
  const [dataUkm, setdataUkm] = useState(null);
  const [hidenProker, sethidenProker] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const getData = DataUkm.find((item) => item.id === parseInt(id));
      setdataUkm(getData);
    }
  }, [id]);

  return (
    <div className="flex flex-col lg:flex-row  bg-white">
      <div className="lg:w-1/2 lg: p-5">
        <img
          src={dataUkm?.img}
          alt=""
          className=" w-full h-full lg:rounded-2xl"
        />
      </div>
      <div className="lg:pt-10 lg:px-16 px-5 py-5 lg:w-1/2 bg-primary md:border-l-2 border-t-2 border-black relative">
        <h1 className="md:text-4xl text-lg font-bold md:mb-5 mb-2">
          UKM {dataUkm?.name}
        </h1>
        <h2 className="md:text-2xl text-base font-semibold mb-3">
          Tentang Kami
        </h2>
        <p className="text-justify md:text-xl md:mb-3 mb-2">
          {dataUkm?.tentang}
        </p>
        <h2 className="md:text-2xl font-semibold md:mb-3">Visi & Misi</h2>
        <p className="text-justify md:text-xl">{dataUkm?.visi}</p>
        <div className="md:mb-40 mb-20">
          <Button className="mt-5 mr-5">Daftar Sekarang</Button>
          <Button onClick={()=>sethidenProker(false)} type="button">
            Lihat Proker
          </Button>
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
      </div>
        <div className={`lg:h-[500px] w-screen fixed flex flex-col gap-3  items-center z-50 ${hidenProker? "hidden":"" } `}>
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
    </div>
  );
};

export default DetailUkm;
