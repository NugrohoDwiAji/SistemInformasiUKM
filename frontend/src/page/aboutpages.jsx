import React from 'react';
import DaftarUKM from '../page/daftarukm';
import Header from '../component/Header';
import Footer from '../component/Footer';


const AboutPage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <h2 className="text-center text-black text-2xl font-bold py-4 font-sans">Daftar UKM</h2>
      <DaftarUKM />
      <Footer />
    </div>
  );
}

export default AboutPage;
