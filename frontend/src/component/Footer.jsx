import React from 'react'

import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-fit bg-primary w-screen py-7 md:px-16 px-5 border-y-2 border-secondary">
    <div className="flex">
      <img src="/siu.png" alt="eror" className="h-12" />
      <h1>
        Sistem <br />
        Informasi UKM
      </h1>
    </div>
    <hr className="h-[2px] my-3 w-full bg-secondary border-none" />
    <div className="flex flex-col md:flex-row  justify-between md:mt-10 mt-5 md:mb-5">
      <p className="tex-sm mb-3 md:mb-0">
        Sistem Informasi UKM @ 2024. All rights reserved.
      </p>
      <div className=" flex gap-4">
        <FaYoutube />
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </div>
  </div>
  )
}

export default Footer