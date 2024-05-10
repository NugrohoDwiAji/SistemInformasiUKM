import React from "react";
import Button from "../component/element/Button";

// component
import LoginUserBar from "../component/LoginUserBar";
import RegistUserBar from "../component/RegistUserBar";
import FaqBar from "../component/FaqBar";
import Header from "../component/Header";
import CardUkmLandingPage from "../component/CardUkmLandingPage";

const ukm = [
  { id: 1, img: "/ukki.png", title: "UKM UKKI JAMAAH" },
  { id: 2, img: "/ukki.png", title: "UKM UKKI JAMAAH" },
  { id: 3, img: "/ukki.png", title: "UKM UKKI JAMAAH" },
  { id: 4, img: "/ukki.png", title: "UKM UKKI JAMAAH" },
  { id: 5, img: "/ukki.png", title: "UKM UKKI JAMAAH" },
  { id: 6, img: "/ukki.png", title: "UKM UKKI JAMAAH" },
  { id: 7, img: "/ukki.png", title: "UKM UKKI JAMAAH" },
];
const faq = [
  {
    id: 1,
    pertanyaan: "Apa itu UKM di kampus?",
    jawaban:
      "Organisasi atau kelompok kegiatan yang dijalankan oleh mahasiswa di kampus.",
      className:"-rotate-12 mr-10"
  },
  {
    id: 2,
    pertanyaan:
      "Mengapa harus memilih UKM yang sesuai dengan minat dan bakat saya?",
    jawaban:
      " Untuk meningkatkan pengalaman kampus Anda, membantu Anda mengembangkan keterampilan yang relevan, dan memperluas jaringan sosial Anda.",
      className:"rotate-12 ml-10"
  },
  {
    id: 3,
    pertanyaan:
      "Bagaimana cara mengetahui minat dan bakat  untuk memilih UKM yang tepat?",
    jawaban: "Pertimbangkan minat Anda, hobi, dan kegiatan anda",
    className:"col-span-2 m-auto"
  },
  {
    id: 4,
    pertanyaan: "Apa manfaat bergabung dengan UKM?",
    jawaban:
      " Membantu Anda mengembangkan keterampilan, menemukan passion baru, memperluas jaringan sosial",
      className:"-rotate-12 mt-10 mr-10"
  },
  {
    id: 5,
    pertanyaan:
      "Bagaimana cara memilih UKM yang sesuai dengan minat dan bakat saya?",
    jawaban:
      "Telusuri berbagai UKM yang tersedia di kampus Anda, tanyakan kepada anggota yang sudah bergabung, dan cari informasi lebih lanjut tentang UKM tersebut",
      className:"rotate-12 mt-10 ml-10"
  },
];

const LandingPage = () => {
  return (
    <div className="overflow-hidden ">
      <div className="h-screen bg-primary">
        <img
          src="/doodle-left.png"
          alt="eror"
          className="absolute left-0 -bottom-16"
        />
        <img
          src="/doodle-right.png"
          alt="eror"
          className="absolute right-0 -bottom-32"
        />
        <div className=" flex items-center justify-center pt-14 gap-10">
          <img src="/hero-landingPage.png" alt="eror" />
          <div>
            <h1
              className="stroke-black stroke-2 text-7xl font-bold text-primary"
              id="title"
            >
              SISTEM INFORMASI <br />
              UKM
            </h1>
            <p className="text-3xl mt-5">Temukan Bakatmu</p>
          </div>
        </div>
      </div>
      {/* UKM Section */}
      <div className="h-screen border-y border-secondary p-5 flex items-center flex-col">
        <p className="text-3xl text-center my-4">
          UKM merupakan klub ekstrakurikuler yang berfungsi sebagai <br /> wadah
          mahasiswa untuk mempelajari dan mengeksplor <br /> banyak hal baru
          serta meningkatkan kemampuan dalam <br /> bidang yang diinginkan.
        </p>
        <div className="flex gap-5 w-full snap-x overflow-auto scrollbar-hide snap-mandatory">
          {ukm.map((item) => (
            <div className="snap-center">
              <CardUkmLandingPage
                img={item.img}
                title={item.title}
                key={item.id}
              />
            </div>
          ))}
        </div>
        <Button className="bg-secondary text-white mt-16">
          Baca Selengkapnya
        </Button>
      </div>
      {/* Minat Section */}
      <div className="bg-primary px-5 py-10 flex flex-col items-center gap-5 relative">
        <img
          src="/doodle-minat-left.png"
          alt="eror"
          className="absolute left-0 -bottom-12"
        />
        <img
          src="/doodle-minat-right.png"
          alt="eror"
          className="absolute z-10 right-0 -bottom-11"
        />
        <h1 className="text-2xl">Minat Dan Bakat</h1>
        <p className="text-5xl text-center font-bold italic leading-relaxed">
          Ayo mulai jelajahi potensi Anda <br />
          sekarang dan temukan tempat <br />
          Anda di UKM
        </p>
        <Button className="text-white bg-secondary ">Pilih Sekarang</Button>
      </div>
      {/* FAQ section */}
      <div className=" border-y border-secondary pb-28">
        <h1 className="text-xl flex justify-center mt-10 mb-20">Frequently Asked Question</h1>
        <div className="grid grid-cols-2 w-fit gap-10 m-auto mt-10">
          {faq.map((item)=>(
            <FaqBar text1={item.pertanyaan} text2={item.jawaban} className={item.className} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
