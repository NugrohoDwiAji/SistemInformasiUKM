import React from "react";

const CardMsg = ({ iconMessage, message }) => {
  return (
    <div
      className={`h-fit w-96 bg-primary text-xl text-center flex flex-col  justify-center items-center p-5 gap-5 font-semibold absolute top-52 -left-[150%] rounded-xl z-50 border-4 border-black ease-in-out duration-300}`}
    >
      {iconMessage}
      <p>{message}</p>
    </div>
  );
};

export default CardMsg;
