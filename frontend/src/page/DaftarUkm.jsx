import React from 'react';

const DaftarUkm = () => {
  const ukmList = [
    { name: 'UKM JAMAAH AL-KAUTSAR', logo: 'Jamaah AlKuatsar.png', description: 'Lembaga kemahasiswaan yang bergerak di bidang dakwah islam', id: 1 },
    { name: 'UKM PMK GALILEA', logo: 'PMK Galilea.png', description: 'Pelayanan UKM PMK Galilea  merupakan unit kagiatan kerohanian Kristiani Galilea', id: 2 },
    { name: 'UKM KMK', logo: 'KMK.png', description: 'UKM KMK (Keluarga Mahasiswa Katolik) merupakan unit kegiatan kerohanian katolik', id: 3 },
    { name: 'UKM PSM GEMA', logo: 'PSM Gema.png', description: 'UKM PSM GEMA merupakan kegiatan yang bergerak di bidang paduan suara', id: 4 },
    { name: 'UKM MAPALISTA', logo: 'Mapala.png', description: 'UKM MAPALISTA (Mahasiswa pecinta alam Universitas Akprind Indonesia) merupakan UKM bagi mahasiswa pecinta alam. ', id: 5 },
    { name: 'UKM PENALA', logo: 'Penala.png', description: 'UKM PENALA bergerak di bidang penalaran dan penelitian ', id: 6 }
  ];
  const handleLihatSelengkapnya = (id) => {
    // Tambahkan logika untuk navigasi atau menampilkan informasi lebih lanjut sesuai dengan ID UKM
    console.log(`Lihat selengkapnya untuk UKM dengan ID ${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-primary p-4">
      {ukmList.map((ukm) => (
        <div key={ukm.id} className="border border-black rounded-md p-4 shadow-md bg-white relative">
          <img src={`/public/${ukm.logo}`} alt={ukm.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-sm md:text-base font-semibold mb-2">{ukm.name}</h3>
          <p className="text-xs mb-12">{ukm.description}</p>
          <button className="bg-white hover:bg-cyan-700 text-black font-bold text-xs py-1 px-2 md:py-2 md:px-4 rounded border border-black absolute bottom-4 right-4" onClick={() => handleLihatSelengkapnya(ukm.id)}>
            Lihat Selengkapnya
          </button>
        </div>
      ))}
    </div>
  );
}



export default DaftarUkm;
