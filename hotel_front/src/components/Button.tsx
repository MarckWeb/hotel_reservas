import React from 'react'
import { ButtonProps } from '../types/formValues'

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="cursor-pointer  bg-background-second font-light text-sm py-1 px-3 rounded mt-3"
    >
      {text}
    </button>
  )
}

export default Button
