import React from 'react'

const Button = (props) => {
const {text, children, type="submit", className, onClick, onChange, classNames} = props

  return (

    <button className={` md:text-sm text-xs rounded-[4px] hover:cursor-pointer border-2 border-secondary w-fit h-fit hover:scale-105 ${classNames} `} type={type} onClick={onClick} onChange={onChange}>
      <div className={`h-full w-full md:py-2 py-1 md:px-6 px-3 rounded-[4px] border-2 border-secondary relative -top-1 -left-1 ${className}`}>
        {text || children}

      </div>
    </button>

  
  )
}

export default Button