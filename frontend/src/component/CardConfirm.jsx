import React from "react";
import Button from "./element/Button";

const CardConfirm = ({sethiddenConfirm, handleSucces}) => {
  return (
    <div className="lg:w-96 lg:h-40 border-2 flex justify-center gap-5 flex-col items-center  border-secondary rounded-2xl bg-primary">
      <h1 className="lg:text-lg font-semibold">
        Apakah Anda Yakin <br />
        Ingin Mendaftar?
      </h1>
      <div className="flex gap-16">
      <Button className="bg-primary" type="button" onClick={sethiddenConfirm}>Kembali</Button>
      <Button className="bg-secondary text-primary lg:w-[109.38px]" onClick={handleSucces} >Daftar</Button>
      </div>
    </div>
  );
};

export default CardConfirm;
