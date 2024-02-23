import { BsCalendarDate } from 'react-icons/bs'

const DateInput = ({ label, type, name }: any) => {
  return (
    <div className="flex flex-col gap-1 m-auto">
      <label htmlFor={name}>{label}</label>
      <div className="flex items-center gap-4 h-10 w-52">
        <input
          className="bg-black rounded outline-none w-full h-full  px-3"
          type={type}
          name={name}
        />
        <BsCalendarDate className="text-3xl" />
      </div>
    </div>
  )
}

export default DateInput
