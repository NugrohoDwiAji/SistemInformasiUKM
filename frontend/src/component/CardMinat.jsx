import React,{useState} from "react";

import { FaCheck } from "react-icons/fa6";


const CardMinat = (props) => {
  const {img, text, id} = props
  const [isCheck, setisCheck] = useState(false)
  return (
    <div className="h-60 w-60 rounded-xl border border-secondary">
      <label htmlFor={id} className="relative cursor-pointer">
      <div className={`absolute bg-opacity-40 ease-in-out duration-300 rounded-xl bg-black h-full w-full ${isCheck? "" : "hidden"}`}>
      <FaCheck size={24} className={`absolute bg-white rounded-full p-1 top-3 right-3 z-50 `}/>
      </div>
        <h1 className="absolute bottom-3 text-white font-semibold left-3">{text}</h1>
        <img src={img} alt="eror" className="h-full w-full rounded-xl" />
      </label>
      <input type="checkbox" name="checkbox" id={id} className="hidden" checked={isCheck} onChange={()=>setisCheck(!isCheck)} />
    </div>
  );
};

export default CardMinat;
