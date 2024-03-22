import { IoIosArrowDown } from 'react-icons/io'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import React from 'react'
import { CreateCateringData } from '../types/catering'

interface PropsSelect {
  name: keyof CreateCateringData
  label: string
  option1: string
  option2: string
  option3: string
  register: UseFormRegister<CreateCateringData>
  setValue: UseFormSetValue<CreateCateringData>
  setPedido: React.Dispatch<React.SetStateAction<CreateCateringData>>
}

const Select: React.FC<PropsSelect> = ({
  name,
  label,
  option1,
  option2,
  option3,
  register,
  setValue,
  setPedido,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPedido((prevPedido) => ({
      ...prevPedido,
      [name]: e.target.value,
    }))
  }
  return (
    <div className=" flex flex-col gap-1 text-color-text-second">
      <label className="text-background-second" htmlFor={name}>
        {label}
      </label>
      <div className="relative items-center h-10 w-52 leading-7 bg-black overflow-hidden rounded-md">
        <select
          {...register(name)}
          className="outline-none bg-transparent cursor-pointer appearance-none absolute top-1 left-0 w-full px-3"
          name={name}
          id={name}
          defaultValue=""
          onChange={(e) => {
            setValue(name, e.target.value as any)
            handleSelectChange(e)
          }}
        >
          <option value="">Selecciona</option>
          <option value={option1}>{option1}</option>
          <option value={option2}>{option2}</option>
          <option value={option3}>{option3}</option>
        </select>
        <div className="w-6 h-6 bg-background-second rounded grid absolute top-2 right-1">
          <IoIosArrowDown className="text-backgroun-title font-bold m-auto" />
        </div>
      </div>
    </div>
  )
}

export default Select
