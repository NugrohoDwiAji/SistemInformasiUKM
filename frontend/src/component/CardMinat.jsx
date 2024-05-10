import React,{useState} from "react";



const CardMinat = () => {
  const [isCheck, setisCheck] = useState(false)
  return (
    <div className="h-60 w-60 rounded-xl border border-secondary">
      <label htmlFor="checkbox">
        
        <img src="/alam.jpg" alt="eror" className="h-full w-full rounded-xl" />
      </label>
      <input type="checkbox" name="checkbox" id="checkbox" className="hidden" checked={isCheck} onChange={()=>setisCheck(!isCheck)} />
    </div>
  );
};

export default CardMinat;
