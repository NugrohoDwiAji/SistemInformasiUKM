import React from 'react';
import Button from '../component/element/Button';
import {Link} from "react-router-dom"
import ukmList from "../data/DaftarUkm.json"


const DaftarUkm = () => {

  const handleLihatSelengkapnya = (id) => {
    // Tambahkan logika untuk navigasi atau menampilkan informasi lebih lanjut sesuai dengan ID UKM
    console.log(`Lihat selengkapnya untuk UKM dengan ID ${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-primary p-4">
      {ukmList.map((ukm) => (
        <div key={ukm.id} className="border border-black rounded-md p-4 shadow-md bg-white relative">
          <img src={`/public/${ukm.logo}`} alt={ukm.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-sm md:text-base font-semibold mb-2">{ukm.name}</h3>
          <p className="text-xs mb-12">{ukm.description}</p>
          <Link to={ukm.link} className="hover:bg-primary text-black font-bold text-xs py-1 px-2 md:py-2 md:px-4 rounded border border-black absolute bottom-4 right-4">
            Lihat Selengkapnya
          </Link>
        </div>
      ))}
    </div>
  );
}



export default DaftarUkm;
