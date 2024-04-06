import { createContext, useContext, useState } from 'react'

// Definición de la forma que tendrá el usuario
interface User {
  token: string
  user: string
}

// Definición de las propiedades y métodos que tendrá el contexto de autenticación
interface AuthContextType {
  userExist: User | null
  onLogin: (user: User) => void
  onLogout: () => void
  getTokenUser: () => void
}

// Creación del contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Proveedor de autenticación que envuelve a los componentes hijos
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Estado para almacenar el usuario autenticado
  const [userExist, setUserExist] = useState<User | null>(
    JSON.parse(localStorage.getItem('tokenUser') || 'null'),
  )

  // Método para obtener el token del usuario actual
  const getTokenUser = () => {
    const userToken: User = JSON.parse(
      localStorage.getItem('tokenUser') || 'null',
    )
    setUserExist(userToken)
  }

  // Método para iniciar sesión
  const onLogin = (userExist: User) => {
    localStorage.setItem('tokenUser', JSON.stringify(userExist))
    setUserExist(userExist)
  }

  // Método para cerrar sesión
  const onLogout = () => {
    localStorage.removeItem('tokenUser')
    setUserExist(null)
  }

  const value: AuthContextType = {
    userExist,
    onLogin,
    onLogout,
    getTokenUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook personalizado para acceder al contexto de autenticación
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext debe ser usado dentro de un AuthProvider')
  }
  return context
}
