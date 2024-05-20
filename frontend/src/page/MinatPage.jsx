import React, { useState,useEffect } from "react";
import CardMinat from "../component/CardMinat";
import DataMinat from "../data/DataMinat.json";
import Button from "../component/element/Button";
import AOS from "aos";

const MinatPage = () => {
  const [checkedItems, setCheckedItems] = useState([]); // Menyimpan status checkbox
const [hasilFix, sethasilFix] = useState()

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
 let a;

  let hasil, data = 123;


const compare = () =>{
  const array = checkedItems.slice().sort()

  switch (JSON.stringify(array)) {
    case JSON.stringify([1,2,3]) :
      hasil='PMK Galelia atau Jamaah al-kautsar atau KMK';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='PMK Galelia atau Jamaah al-kautsar atau KMK';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='PMK Galelia atau Jamaah al-kautsar atau KMK';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='PMK Galelia atau Jamaah al-kautsar atau KMK';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='PMK Galelia atau Jamaah al-kautsar atau KMK';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='PMK Galelia atau Jamaah al-kautsar atau KMK';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='PMK Galelia atau Jamaah al-kautsar atau KMK';
      break;
    case JSON.stringify([1,3,4]) :
      hasil='oke8';
      break;
    case JSON.stringify([1,3,5]) :
      hasil='oke9';
      break;
    case JSON.stringify([1,3,6]) :
      hasil='oke10';
      break;
    case JSON.stringify([1,3,7]) :
      hasil='oke11';
      break;
    case JSON.stringify([1,3,8]) :
      hasil='oke12';
      break;
    case JSON.stringify([1,3,9]) :
      hasil='oke13';
      break;
    case JSON.stringify([1,4,5]) :
      hasil='oke14';
      break;
    case JSON.stringify([1,4,6]) :
      hasil='oke15';
      break;
    case JSON.stringify([1,4,7]) :
      hasil='oke16';
      break;
    case JSON.stringify([1,4,8]) :
      hasil='oke17';
      break;
    case JSON.stringify([1,4,9]) :
      hasil='oke18';
      break;
    case JSON.stringify([1,5,6]) :
      hasil='oke19';
      break;
    case JSON.stringify([1,5,7]) :
      hasil='oke20';
      break;
    case JSON.stringify([1,5,8]) :
      hasil='oke21';
      break;
    case JSON.stringify([1,5,9]) :
      hasil='oke22';
      break;
    case JSON.stringify([1,6,7]) :
      hasil='oke23';
      break;
    case JSON.stringify([1,6,8]) :
      hasil='oke24';
      break;
    case JSON.stringify([1,6,9]) :
      hasil='oke25';
      break;
    case JSON.stringify([1,7,8]) :
      hasil='oke26';
      break;
    case JSON.stringify([1,7,9]) :
      hasil='oke27';
      break;
    case JSON.stringify([1,8,9]) :
      hasil='oke28';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,3]) :
      hasil='oke';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,3]) :
      hasil='oke';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,3]) :
      hasil='oke';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,3]) :
      hasil='oke';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,3]) :
      hasil='oke';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,3]) :
      hasil='oke';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,3]) :
      hasil='oke';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,3]) :
      hasil='oke';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([1,2,4]) :
      hasil='oke2';
      break;
  
    default:
      hasil='pilih kembali'
      break;
  }
  console.log("di click"+hasil)
  sethasilFix(hasil)
}
useEffect(() => {
  AOS.init({
    // once: true,
    duration:1500
  });
}, []);



  return (
    <div className="flex flex-col items-center lg:pt-24 md:pt-16 md:px-5 px-2 pt-5 bg-primary w-screen ">
      <h1 className="lg:text-5xl md:text-3xl text-base font-bold md:border-4 border-2 border-dashed md:p-5 p-3 border-secondary rounded-xl ">
        PILIH TOPIK YANG KAMU SUKA
      </h1>
      <h2 className="lg:my-10 md:my-5 my-3 lg:text-2xl md:text-xl">Tentukan Minat Dan Bakatmu</h2>
      <form className="grid grid-cols-3 gap-5">
        {DataMinat.map((item) => (
          <div data-aos="flip-left">
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
          </div>
        ))}
        {console.log()}
        <Button  className="w-full col-start-1 col-end-4 mb-10" onClick={compare} type="button">Selesai</Button>
      </form>
      <h1 className="text-start w-2/3 mb-10 lg:text-xl md:text-lg text-sm font-semibold">
        {" "}
        Menurut Inputan Dari Kamu, Kami Merekomendasikan
        UKM : {hasilFix}{" "}
      </h1>
    </div>
  );
};

export default MinatPage;
