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
    <div className=" flex flex-col gap-1 m-auto">
      <label htmlFor={name}>{label}</label>
      <div className="relative items-center h-10 w-52 leading-7 bg-black overflow-hidden rounded-md">
        <select
          className="outline-none bg-transparent cursor-pointer appearance-none  absolute top-1 left-0 w-full px-3"
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
        <div className="w-6 h-6 bg-background-second rounded grid absolute top-2 right-1">
          <IoIosArrowDown className="text-backgroun-title font-bold m-auto" />
        </div>
      </div>
    </div>
  )
}

export default Select
