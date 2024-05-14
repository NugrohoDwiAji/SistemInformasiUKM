import React from "react";
import CardMinat from "../component/CardMinat";


const MinatPage = () => {
  return (
   <div className="flex flex-col items-center pt-24 bg-primary ">
    <h1 className="text-5xl font-bold border-4 border-dashed p-5 border-secondary rounded-xl">PILIH TOPIK YANG KAMU SUKA</h1>
    <h2>Tentukan Minat Dan Bakatmu</h2>
    <div>
<CardMinat/>
    </div>
   </div>
  );
};

export default MinatPage;
