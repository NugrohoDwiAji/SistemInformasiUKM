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
      hasil='MPALISTA';
      break;
    case JSON.stringify([1,3,5]) :
      hasil='MAPALISTA';
      break;
    case JSON.stringify([1,3,6]) :
      hasil='MAPALISTA';
      break;
    case JSON.stringify([1,3,7]) :
      hasil='MAPALISTA';
      break;
    case JSON.stringify([1,3,8]) :
      hasil='PSM GEMA';
      break;
    case JSON.stringify([1,3,9]) :
      hasil='PSM GEMA';
      break;
    case JSON.stringify([1,4,5]) :
      hasil='MAPALISTA';
      break;
    case JSON.stringify([1,4,6]) :
      hasil='PENALA';
      break;
    case JSON.stringify([1,4,7]) :
      hasil='MAPALISTA';
      break;
    case JSON.stringify([1,4,8]) :
      hasil='PENALA atau PSM GEMA';
      break;
    case JSON.stringify([1,4,9]) :
      hasil='PENALA atau PSM GEMA';
      break;
    case JSON.stringify([1,5,6]) :
      hasil='PSM GEMA atau PENALA';
      break;
    case JSON.stringify([1,5,7]) :
      hasil='MAPALISTA';
      break;
    case JSON.stringify([1,5,8]) :
      hasil='MAPALISTA atau PENALA';
      break;
    case JSON.stringify([1,5,9]) :
      hasil='PENALA';
      break;
    case JSON.stringify([1,6,7]) :
      hasil='PENALA';
      break;
    case JSON.stringify([1,6,8]) :
      hasil='PSM GEMA';
      break;
    case JSON.stringify([1,6,9]) :
      hasil='PSM GEMA';
      break;
    case JSON.stringify([1,7,8]) :
      hasil='PSM GEMA';
      break;
    case JSON.stringify([1,7,9]) :
      hasil='MAPALISTA';
      break;
    case JSON.stringify([1,8,9]) :
      hasil='PSM GEMA';
      break;
    case JSON.stringify([2,3,4]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,3,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,3,6]) :
      hasil='oke';
      break;
    case JSON.stringify([2,3,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,3,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,3,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,4,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,4,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,4,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,4,8]) :
      hasil='oke';
      break;
    case JSON.stringify([2,4,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,5,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,5,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,5,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,5,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,6,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,6,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,6,9]) :
      hasil='oke';
      break;
    case JSON.stringify([2,7,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,7,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([2,8,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,4,5]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,4,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,4,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,4,8]) :
      hasil='oke';
      break;
    case JSON.stringify([3,4,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,5,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,5,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,5,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,5,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,6,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,6,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,6,9]) :
      hasil='oke';
      break;
    case JSON.stringify([3,7,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,7,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([3,8,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,5,6]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,5,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,5,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,5,9]) :
      hasil='oke';
      break;
    case JSON.stringify([4,6,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,6,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,6,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,7,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,7,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([4,8,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([5,6,7]) :
      hasil='oke2';
      break;
    case JSON.stringify([5,6,8]) :
      hasil='oke';
      break;
    case JSON.stringify([5,6,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([5,7,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([5,7,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([5,8,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([6,7,8]) :
      hasil='oke2';
      break;
    case JSON.stringify([6,7,9]) :
      hasil='oke2';
      break;
    case JSON.stringify([6,8,9]) :
      hasil='oke';
      break;
    case JSON.stringify([7,8,9]) :
      hasil='oke2';
      break;  
    default:
      hasil='INPUT INVALID pastikan anda memilih 3 pilihan...'
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
      <h1 className="lg:text-5xl md:text-3xl text-base text-secondary font-bold md:border-4 border-2 border-dashed md:p-5 p-3 border-secondary rounded-xl ">
        PILIH 3 TOPIK YANG KAMU SUKA
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
        
        <Button onClick={compare} type="button" classNames="w-full col-start-1 col-end-4 mb-10" className="bg-primary">Selesai</Button>

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
