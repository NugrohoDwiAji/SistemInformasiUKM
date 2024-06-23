import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ukmList from "../data/DaftarUkm.json";
import { getAllUkm } from "../services/ukm.services";

const DaftarUkm = () => {
  const [dataUkm, setdataUkm] = useState([]);

  const handleGetData = async () => {
    await getAllUkm((res) => {
      if (!res) {
        console.log("Pengambilan Data UKM Gagal");
      } else {
        setdataUkm(res);
      }
    });
  };

  useEffect(() => {
    handleGetData();
  }, []);
console.log(dataUkm)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-primary p-4">
      {dataUkm.map((item) => (
        <div
          key={item.id}
          className="border border-black rounded-md p-4 shadow-md bg-white relative"
        >
          <img
            src={`${item.logo}`}
            alt={"eror"}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-sm md:text-base font-semibold mb-2 font-lexend">
            {item.nama}
          </h3>
          <p className="text-xs mb-12">{item.deskripsi}</p>
          <Link
            to={item.link}
            className="hover:bg-primary text-black font-bold text-xs h-fit w-fit  rounded border border-black absolute bottom-4 right-4 hover:scale-105"
          >
            <div className="relative border border-secondary py-1 px-2 md:py-2 md:px-4 rounded -top-1 -left-1 bg-white hover:bg-primary">
              Lihat Selengkapnya
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DaftarUkm;
