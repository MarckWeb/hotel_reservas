import { IoIosArrowDown } from 'react-icons/io'

interface PropsSelect {
  name: string
  label: string
  option1: string
  option2: string
  option3: string
}

const Select = ({ name, label, option1, option2, option3 }: PropsSelect) => {
  return (
    <div className=" flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <div className="relative items-center w-40 h-8 leading-7 bg-black overflow-hidden rounded-md">
        <select
          className="outline-none shadow bg-backgroun-title cursor-pointer appearance-none  absolute top-0 left-0 w-full z-10 "
          name={name}
          id={name}
        >
          <option selected value="">
            seleccion
          </option>
          <option value="">{option1}</option>
          <option value="">{option2}</option>
          <option value="">{option3}</option>
        </select>
        <div className="w-6 h-6 bg-background-second rounded grid absolute top-1 right-1">
          <IoIosArrowDown className="text-backgroun-title font-bold m-auto" />
        </div>
      </div>
    </div>
  )
}

export default Select
