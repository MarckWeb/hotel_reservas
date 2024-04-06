import React, { createContext, useContext, useState, ReactNode } from 'react'

// Definición de la forma que tendrá el contexto de alerta
interface AlertContextProps {
  message: string | null
  setMessage: React.Dispatch<React.SetStateAction<string | null>>
}

// Creación del contexto de alerta
const AlertContext = createContext<AlertContextProps | undefined>(undefined)

// Hook personalizado para acceder al contexto de alerta
export const useAlert = () => {
  const context = useContext(AlertContext)
  // Verifica si el hook se está utilizando dentro del proveedor adecuado
  if (!context) {
    throw new Error('useAlert debe ser usado dentro de un AlertProvider')
  }

  return context
}

// Propiedades que acepta el componente AlertProvider
interface AlertProviderProps {
  children: ReactNode
}

// Proveedor de alerta que envuelve a los componentes hijos
export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null)

  // Renderiza el proveedor de contexto con el valor actual del mensaje y la función para establecerlo
  return (
    <AlertContext.Provider value={{ message, setMessage }}>
      {children}
    </AlertContext.Provider>
  )
}
