import React from 'react'

const Button = (props) => {
const {text, children, type="submit", className} = props

  return (
    <button className={`py-2 px-6 text-sm rounded-lg hover:cursor-pointer border-2 border-secondary w-fit h-fit hover:shadow-xl hover:scale-105 ${className}`} type={type}>
        {text || children}
    </button>
  )
}

export default Button