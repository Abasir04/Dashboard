import React from 'react'

const Button = ({color, bgColor, size, text, borderRadius}) => {
  return (
    <button 
      type="button"
      /* prop names and style names that are the same you can just write the name instead of color: color */
      style={{ backgroundColor: bgColor, color, borderRadius: borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button