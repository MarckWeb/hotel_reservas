import { createContext, useContext, useState } from 'react'
interface UserLogin {
  createdAt: string
  name: string
  photo: string
  updatedAt: string
  username: string
  _id: string
}

interface User {
  token: string
  user: UserLogin
}

interface AuthContextType {
  userExist: User | null
  onLogin: (user: User) => void
  onLogout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userExist, setUserExist] = useState<User | null>(
    JSON.parse(localStorage.getItem('tokenUser') || 'null'),
  )

  const onLogin = (userExist: User) => {
    localStorage.setItem('tokenUser', JSON.stringify(userExist))
    setUserExist(userExist)
  }

  const onLogout = () => {
    localStorage.removeItem('tokenUser')
    setUserExist(null)
  }

  const value: AuthContextType = {
    userExist,
    onLogin,
    onLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
