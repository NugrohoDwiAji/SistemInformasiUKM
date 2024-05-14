import React from 'react'

const CardUkmLandingPage = ({img,title, className}) => {
  return (
    <div className={`h-80 w-64 border-2 border-secondary rounded-xl flex items-center justify-center gap-10 flex-col p-3 ${className}`}>
        <img src={img} alt="eror" />
        <h1 className='text-xl'>{title}</h1>

    </div>
  )
}

export default CardUkmLandingPage