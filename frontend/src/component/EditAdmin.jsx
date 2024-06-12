import React from "react";

export const EditAdmin = () => {
  return (
    <div className="h-full w-full z-30 bg-slate-300 absolute bg-opacity-40 rounded-lg flex justify-center items-center">
      <div className="flex gap-5">
        <button className="bg-primary border-2 border-secondary  rounded-md px-2 font-lexend hover:scale-105 hover:shadow-lg">
          Update
        </button>
        <button className="bg-primary border-2 border-secondary rounded-md px-2 font-lexend hover:scale-105 hover:shadow-lg">
          Delete
        </button>
      </div>
    </div>
  );
};
