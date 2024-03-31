import React from 'react'

interface PropsAlert {
  message: string
}

const Alert: React.FC<PropsAlert> = ({ message }) => {
  return (
    <div className="">
      <p>{message}</p>
    </div>
  )
}

export default Alert
