import React from 'react'

const CardUkmLandingPage = ({img,title, className}) => {
  return (
    <div className={`lg:h-80 lg:w-64 md:h-64 md:w-48 h-48 w-36 border-2 border-secondary rounded-xl flex items-center justify-center lg:gap-10 gap-3 flex-col lg:p-3 p-1 ${className}`}>
        <img src={img} alt="eror" />
        <h1 className='lg:text-xl md:text-base text-sm'>{title}</h1>

    </div>
  )
}

export default CardUkmLandingPage