/* eslint-disable react-hooks/exhaustive-deps */
import Clock from '../components/Clock'
import { FaUser } from 'react-icons/fa6'
import Weather from '../components/Weather'
import { ToggleActive } from '../types/toggle'
import { useLocation } from 'react-router-dom'
import Navbar from './NavBar'
import { useAuthContext } from '../context/auth-context'
import loginService from '../services/login'
import { useEffect, useState } from 'react'
import { User } from '../types/loginUser'

const Header = ({
  toggleVisibility,
  toggleActiveMenu,
  isActive,
}: ToggleActive) => {
  const [showUser, setShowUser] = useState<User>()

  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const { userExist } = useAuthContext()

  console.log(isActive)

  const verifyUser = async () => {
    const userId = userExist?.user ?? ''
    const user = await loginService.getUserAutenticated(userId)
    setShowUser(user)
  }

  useEffect(() => {
    verifyUser()
  }, [])

  return (
    <header className="bg-black flex flex-row justify-between py-1 md:py-2 px-2 md:px-4 relative">
      <div className="flex flex-col items-end">
        <h2 className="text-white text-2xl font-extrabold">GRANDHOTEL</h2>
        <span className="text-background-second text-[10px] font-bold">
          GRANDHOTEL BERLIN
        </span>
      </div>

      <section className="text-color-text-second flex flex-col items-end">
        <Clock />
        <div className="flex gap-5">
          {userExist ? (
            <div className="flex flex-row items-center gap-3">
              {showUser?.photo ? (
                <img
                  className="w-10 h-10 rounded-[50%]"
                  src={showUser?.photo}
                  alt=""
                />
              ) : (
                <p className="w-10 h-10 rounded-[50%] border-2 border-background-second text-center text-2xl font-bold text-white">
                  {showUser?.name?.charAt(0)}
                </p>
              )}
              <span className="font-light hidden sm:block">
                {showUser?.name}
              </span>
            </div>
          ) : (
            <p
              className="flex flex-row items-center gap-1 text-sm font-extralight cursor-pointer"
              onClick={toggleVisibility}
            >
              <FaUser />
              Registrarme
            </p>
          )}

          <Weather />
        </div>
      </section>

      {!isHomePage && (
        <Navbar isActive={isActive} toggleActiveMenu={toggleActiveMenu} />
      )}
    </header>
  )
}

export default Header
