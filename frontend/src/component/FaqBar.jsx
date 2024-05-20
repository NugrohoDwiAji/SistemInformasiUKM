import React, { useState } from "react";

const FaqBar = ({ text1, text2, className }) => {
  const [isHover, setisHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      className={`lg:px-6 md:px-3 px-2 lg:py-2 py-1 md:py-2 lg:w-[22rem] md:w-72  w-40 lg:h-[7rem] md:h-20 h-16 ease-in-out hover:bg-primary duration-300 bg-transparent text-secondary lg:border-[3px] md:border-[2px] border-[1px] border-secondary cursor-pointer border-dashed hover:border-solid flex items-center justify-center text-center md:text-sm text-xs rounded-lg ${className}`}
    >
      {isHover ?  text2 : text1}
    </div>
  );
};

export default FaqBar;
