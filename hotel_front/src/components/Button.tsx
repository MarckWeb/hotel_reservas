import React from 'react'
import { ButtonProps } from '../types/formValues'

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className=" w-30 cursor-pointer  bg-background-second font-light text-lg py-1 px-3 rounded mt-3 text-white col-span-2 ml-auto"
    >
      {text}
    </button>
  )
}

export default Button
