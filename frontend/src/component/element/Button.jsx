import React from 'react'

const Button = (props) => {
const {text, children, type="submit", className, onClick, onChange} = props

  return (
    <button className={`md:py-2 py-1 md:px-6 px-3 md:text-sm text-xs rounded-lg hover:cursor-pointer border-2 border-secondary w-fit h-fit hover:shadow-xl hover:scale-105 ${className}`} type={type} onClick={onClick} onChange={onChange}>
        {text || children}
    </button>
  )
}

export default Button