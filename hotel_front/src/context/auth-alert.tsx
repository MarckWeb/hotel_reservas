import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AlertContextProps {
  message: string | null
  setMessage: React.Dispatch<React.SetStateAction<string | null>>
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined)

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert debe ser usado dentro de un AlertProvider')
  }
  return context
}

interface AlertProviderProps {
  children: ReactNode
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null)

  return (
    <AlertContext.Provider value={{ message, setMessage }}>
      {children}
    </AlertContext.Provider>
  )
}
