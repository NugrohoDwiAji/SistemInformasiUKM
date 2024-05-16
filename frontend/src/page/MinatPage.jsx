import React from "react";
import CardMinat from "../component/CardMinat";
import DataMinat from "../data/DataMinat.json";
import Button from "../component/element/Button";

const MinatPage = () => {
  return (
    <div className="flex flex-col items-center pt-24 bg-primary ">
      <h1 className="text-5xl font-bold border-4 border-dashed p-5 border-secondary rounded-xl ">
        PILIH TOPIK YANG KAMU SUKA
      </h1>
      <h2 className="my-10 text-xl">Tentukan Minat Dan Bakatmu</h2>
      <form className="grid grid-cols-3 gap-5">
        {DataMinat.map((item) => (
            <CardMinat text={item.text} img={item.img} id={item.id}/>
      ))}
      <Button className="w-full col-start-1 col-end-4 mb-10">Selesai</Button>
      </form>

      <h1 className="text-start w-2/3 mb-10 text-xl font-semibold"> Menurut Inputan Dari Kamu, Kami Merekomendasikan <br />UKM :  </h1>
    </div>
  );
};

export default MinatPage;
