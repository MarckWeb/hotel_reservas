import React, { ReactNode } from 'react'
interface PropBoder {
  children: ReactNode
}

const BorderElememts: React.FC<PropBoder> = ({ children }) => {
  return (
    <div className="flex flex-col items-center md:hidden">
      <div className="relative inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-[50%] w-[80px] h-[80px]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  inset-0  w-[75px] h-[75px] bg-black rounded-[50%] flex">
          {children}
        </div>
      </div>
    </div>
  )
}

export default BorderElememts
