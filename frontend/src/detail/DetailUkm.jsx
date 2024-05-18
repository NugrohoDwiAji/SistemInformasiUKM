import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataUkm from "../data/DetailUkm.json"
import Button from '../component/element/Button'

const DetailUkm = () => {
const [dataUkm, setdataUkm] = useState(null)
const {id} = useParams()

useEffect(() => {
  
  if(id){
  const getData = DataUkm.find((item)=> item.id === parseInt(id))
  setdataUkm(getData)
  }
}, [id])

  return (
    <div className='flex bg-white'>
      <div className='w-1/2 min-h-screen p-5'>
        <img src={dataUkm?.img} alt="" className=' w-full h-full rounded-2xl'/>
      </div>
      <div className='pt-10 px-16 w-1/2 bg-primary border-l-2 border-black relative'>
        <h1 className='text-4xl font-bold mb-5'>UKM {dataUkm?.name}</h1>
        <h2 className='text-2xl font-semibold mb-3'>Tentang Kami</h2>
        <p className='text-justify text-xl mb-3'>{dataUkm?.tentang}</p>
        <h2 className='text-2xl font-semibold mb-3'>Visi & Misi</h2>
        <p className='text-justify text-xl'>{dataUkm?.visi}</p>
        <div className='mb-40'>
          <Button className="mt-5 mr-5">Daftar Sekarang</Button>
          <Button>Lihat Proker</Button>
        </div>
        <img src={dataUkm?.bg1} alt="eror" className='absolute bottom-0 right-3 ' />
        <img src={dataUkm?.bg2} alt="eror" className='absolute bottom-0 left-3' />

      </div>
    </div>
  )
}

export default DetailUkm