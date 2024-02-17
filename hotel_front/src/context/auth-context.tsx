import { createContext, useContext, useState } from 'react'
// interface UserLogin {
//   createdAt: string
//   name: string
//   photo: string
//   updatedAt: string
//   username: string
//   _id: string
// }

interface User {
  token: string
  user: string
}

interface AuthContextType {
  userExist: User | null
  onLogin: (user: User) => void
  onLogout: () => void
  getTokenUser: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userExist, setUserExist] = useState<User | null>(
    JSON.parse(localStorage.getItem('tokenUser') || 'null'),
  )

  const getTokenUser = () => {
    const userToken: User = JSON.parse(
      localStorage.getItem('tokenUser') || 'null',
    )
    setUserExist(userToken)
  }

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
    getTokenUser,
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
