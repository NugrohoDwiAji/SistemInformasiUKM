import React,{useState} from "react";

import { FaCheck } from "react-icons/fa6";


const CardMinat = (props) => {
  const {img, text, id, handleChange, value, checked, k} = props
  const [isCheck, setisCheck] = useState(false)

  const handleCheck = (e) =>{

  if (k < 3) {
    handleChange(e) 
    setisCheck(!isCheck)
  }else{
    return
  }
    
  }
  return (
    <div className="lg:h-60 md:h-48 h-24 lg:w-60 md:w-48 w-24 rounded-xl border border-secondary">
      <label htmlFor={id} className="relative cursor-pointer">
      <div className={`absolute bg-opacity-40 ease-in-out duration-300 rounded-xl bg-black h-full w-full ${isCheck? "" : "hidden"}`}>
      <FaCheck size={24} className={`absolute bg-white rounded-full p-1 top-3 right-3 z-10 `}/>
      </div>
        <h1 className="absolute bottom-3 text-white font-semibold left-3 md:text-base text-xs">{text}</h1>
        <img src={img} alt="eror" className="h-full w-full rounded-xl" />
      </label>
      <input type="checkbox" value={value} id={id} className="hidden" checked={checked} onChange={handleCheck} />
     
    </div>
  );
};

export default CardMinat;
