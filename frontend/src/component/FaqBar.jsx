import React, { useState } from "react";

const FaqBar = ({ text1, text2, className }) => {
  const [isHover, setisHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      className={`px-6 py-2 w-[22rem] h-[7rem] ease-in-out hover:bg-primary duration-300 bg-transparent text-secondary border-[3px] border-secondary cursor-pointer border-dashed hover:border-solid flex items-center justify-center text-center text-sm rounded-lg ${className}`}
    >
      {isHover ?  text2 : text1}
    </div>
  );
};

export default FaqBar;
