import React, { useEffect, useState } from "react";
import Button from "../component/element/Button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginBar from "../component/LoginBar";
import ProfilBar from "../component/ProfilBar";
import RegistBar from "../component/RegistBar";

// data

import DaftarUkm from "../data/DaftarUkm.json";

// component
import FaqBar from "../component/FaqBar";
import CardUkmLandingPage from "../component/CardUkmLandingPage";
import { isAuthenticated } from "../services/auth.services";

const LandingPage = () => {
  const [hidenLogin, sethidenLogin] = useState(true);
  const [hidenRegist, sethidenRegist] = useState(true);
  const [profil, setprofil] = useState(false);
  const [login, setLogin] = useState(false);


  const handleOpenRegist = () => {
    sethidenLogin(true);
    sethidenRegist(false);
  };
  const handleOpenLogin = () => {
    sethidenLogin(false);
    sethidenRegist(true);
  };

  // hanya sementara
  const handleLogin = () => {
    setLogin(true);
    sethidenLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
    setprofil(false);
  };
  const Faq = [
    {
      id: 1,
      pertanyaan: "Apa itu UKM di kampus?",
      jawaban:
        "Organisasi atau kelompok kegiatan yang dijalankan oleh mahasiswa di kampus.",
      className: "md:-rotate-12 md:mr-10",
    },
    {
      id: 2,
      pertanyaan:
        "Mengapa harus memilih UKM yang sesuai dengan minat dan bakat saya?",
      jawaban:
        " Untuk meningkatkan pengalaman kampus Anda, membantu Anda mengembangkan keterampilan yang relevan, dan memperluas jaringan sosial Anda.",
      className: "md:rotate-12 md:ml-10",
    },
    {
      id: 3,
      pertanyaan:
        "Bagaimana cara mengetahui minat dan bakat  untuk memilih UKM yang tepat?",
      jawaban: "Pertimbangkan minat Anda, hobi, dan kegiatan anda",
      className: "col-span-2 m-auto",
    },
    {
      id: 4,
      pertanyaan: "Apa manfaat bergabung dengan UKM?",
      jawaban:
        " Membantu Anda mengembangkan keterampilan, menemukan passion baru, memperluas jaringan sosial",
      className: "md:-rotate-12 md:mt-10 md:mr-10",
    },
    {
      id: 5,
      pertanyaan:
        "Bagaimana cara memilih UKM yang sesuai dengan minat dan bakat saya?",
      jawaban:
        "Telusuri berbagai UKM yang tersedia di kampus Anda, tanyakan kepada anggota yang sudah bergabung, dan cari informasi lebih lanjut tentang UKM tersebut",
      className: "md:rotate-12 md:mt-10 md:ml-10",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden w-screen">
      {/* Hero Section */}
      <div className="h-[300px] md:h-[450px] lg:h-[600px] bg-primary relative lg:pt-16 md:pt-12 pt-8 px-5">
        <img
        data-aos="fade-right"
          src="/doodle-left.png"
          alt="eror"
          className="absolute left-0 lg:h-72  md:h-52 h-24 bottom-0"
        />

        <div data-aos="fade-up" className="h-fit w-fit mb-3 md:mb-5 lg:mb-7 md:w-[600px] lg:w-[800px] border-2 lg:border-r-8 lg:border-b-8 md:border-r-[6px] md:border-b-[6px] border-r-4 border-b-4 rounded-xl text-xs md:text-base lg:text-xl border-secondary shadow-2xl flex flex-col text-center bg-white px-3 py-3 lg:px-12 gap-3 lg:py-7  m-auto relative ">
          <img src="/softStar.png" alt="eror" className="absolute -top-7 -left-7 md:-top-12 md:-left-12 md:h-28 h-16" />
            <h1 className=" text-lg md:text-2xl lg:text-4xl font-semibold font-lexend">Sistem Informasi UKM</h1>
            <p>Temukan Ruang untuk Mengembangkan Ide dan Bakatmu Platform Digital Inovatif yang Mendorong Kreativitas dan Kolaborasi di Kalangan Mahasiswa</p>
        </div>
        <div className="flex gap-3 md:ml-16 lg:ml-80">
          <Button className="bg-primary" onClick={()=>sethidenRegist(!hidenRegist)}>Daftar Sekarang</Button>
          <Button className="bg-primary" onClick={()=>sethidenLogin(!hidenLogin)} >Login</Button>
        </div>
        <div data-aos="fade-left" className="h-fit w-64 md:w-80  lg:w-[550px] border-2  lg:border-l-8 lg:border-b-8 md:border-b-[6px] md:border-l-[6px] bg-white rounded-xl border-secondary shadow-2xl absolute right-6 bottom-5 lg:p-7 md:p-5 lg:text-xl md:text-sm hidden md:block ">
          <p>Selamat datang di Sistem Informasi UKM, <br /> tempat dimana semangat
          kreativitas dan kolaborasi mahasiswa bersatu. Kami menyediakan ruang
          bagi Unit Kegiatan Mahasiswa untuk berbagi ide, berkolaborasi,<br /> dan
          mengembangkan potensi mereka secara maksimal.</p>
        </div>
      </div>
      {/* UKM Section */}
      <div className="h-[450px] md:h-[540px] lg:h-[650px] border-y border-secondary md:p-5 p-2 flex items-center flex-col">
        <p className="lg:text-3xl md:text-lg text-xs text-center my-4">
          UKM merupakan klub ekstrakurikuler yang berfungsi sebagai <br /> wadah
          mahasiswa untuk mempelajari dan mengeksplor <br /> banyak hal baru
          serta meningkatkan kemampuan dalam <br /> bidang yang diinginkan.
        </p>
        <div className="flex gap-5 w-full snap-x overflow-auto scrollbar-hide snap-mandatory mb-8">
          {DaftarUkm.map((item) => (
            <div className="snap-center" key={item.id} data-aos="flip-right">
              <CardUkmLandingPage img={item.logo} title={item.name} />
            </div>
          ))}
        </div>
        <Link to={isAuthenticated()?"/about":"/"}>
          <Button className="bg-white text-secondary">Baca Selengkapnya</Button>
        </Link>
      </div>
      {/* Minat Section */}
      <div className="md:h-80 h-64 lg:h-fit  bg-primary lg:px-5 md:px-3 px-2 lg:py-10 md:py-5 py-3 flex flex-col items-center gap-5 relative">
        <img
          data-aos="fade-left"
          src="/doodle-minat-left.png"
          alt="eror"
          className="absolute left-0 lg:h-80 md:h-60 h-40  lg:-bottom-12 md:-bottom-8 -bottom-6"
        />
        <img
          data-aos="fade-right"
          src="/doodle-minat-right.png"
          alt="eror"
          className="absolute lg:h-80 md:h-60 h-40 z-10 right-0 lg:-bottom-11 md:-bottom-8 -bottom-5"
        />
        <h1 className="lg:text-2xl md:text-xl text-lg">Minat Dan Bakat</h1>
        <p className="font-lexend lg:text-5xl  md:text-3xl text-xl text-center font-bold italic lg:leading-relaxed md:leading-normal">
          Ayo mulai jelajahi potensi Anda <br />
          sekarang dan temukan tempat <br />
          Anda di UKM
        </p>
        <Link to={isAuthenticated()?"/minat":"/"}>
          <Button className="text-secondary bg-primary ">Pilih Sekarang</Button>
        </Link>
      </div>
      {/* FAQ section */}
      <div className=" border-y border-secondary md:pb-28 pb-10">
        <h1 className="text-xl flex justify-center mt-10 md:mb-20 ">
          Frequently Asked Question
        </h1>
        <div className="grid grid-cols-2 w-fit md:gap-10 gap-3 m-auto md:mt-10 mt-5 ">
          {Faq.map((item) => (
            <FaqBar
              text1={item.pertanyaan}
              text2={item.jawaban}
              className={item.className}
              key={item.id}
            />
          ))}
        </div>
        <div className="absolute top-0 right-0  z-50">

            <LoginBar
              hidenLogin={hidenLogin}
              sethidenLogin={() => sethidenLogin(true)}
              handleOpenRegist={handleOpenRegist}
              setLogin={handleLogin}
            />
            <RegistBar
              hidenRegist={hidenRegist}
              sethidenRegist={() => sethidenRegist(true)}
              handleOpenLogin={handleOpenLogin}
            />
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
