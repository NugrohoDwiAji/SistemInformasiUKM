import React, { useState } from "react";
import CardMinat from "../component/CardMinat";
import DataMinat from "../data/DataMinat.json";
import Button from "../component/element/Button";

const MinatPage = () => {
  const [checkedItems, setCheckedItems] = useState([]); // Menyimpan status checkbox

  const handleChange = (e) => {
    let isSelected = e.target.checked;
    let value = parseInt(e.target.value);
    if (checkedItems.length < 3) {
      if (isSelected) {
        setCheckedItems([...checkedItems, value]);
      } else {
        setCheckedItems((prevData) => {
          return prevData.filter((id) => {
            return id !== value;
          });
        });
      }
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col items-center pt-24 bg-primary w-screen ">
      <h1 className="text-5xl font-bold border-4 border-dashed p-5 border-secondary rounded-xl ">
        PILIH TOPIK YANG KAMU SUKA
      </h1>
      <h2 className="my-10 text-xl">Tentukan Minat Dan Bakatmu</h2>
      <form className="grid grid-cols-3 gap-5">
        {DataMinat.map((item) => (
          <CardMinat
            text={item.text}
            img={item.img}
            id={item.id}
            key={item.id}
            value={item.value}
            checked={checkedItems.includes(item.value)}
            handleChange={handleChange}
            k={checkedItems.length}
          />
        ))}
        <Button className="w-full col-start-1 col-end-4 mb-10">Selesai</Button>
      </form>
      {console.log(checkedItems)}

      <h1 className="text-start w-2/3 mb-10 text-xl font-semibold">
        {" "}
        Menurut Inputan Dari Kamu, Kami Merekomendasikan <br />
        UKM : {checkedItems.toString()}{" "}
      </h1>
    </div>
  );
};

export default MinatPage;
