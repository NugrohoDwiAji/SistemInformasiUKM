import React from 'react'

const Proker = ({no,kegiatan,waktu,deskripsi}) => {
  return (
                <tr className='text-center'>
                    <td className='border-2 border-black lg:px-5 lg:py-2  '>{no}</td>
                    <td className='border-2 border-black lg:px-5 lg:py-2'>{kegiatan}</td>
                    <td className='border-2 border-black lg:px-5 lg:py-2'>{waktu}</td>
                    <td className='border-2 border-black lg:px-5 lg:py-2'>{deskripsi}</td>
                    <td className='border-2 border-black lg:px-5 lg:py-2'>{""}</td>
                </tr>
  )
}

export default Proker