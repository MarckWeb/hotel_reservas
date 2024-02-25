import Clock from '../components/Clock'
import { FaUser } from 'react-icons/fa6'
import Weather from '../components/Weather'
import { ToggleActive } from '../types/toggle'
import { useLocation } from 'react-router-dom'
import Navbar from './NavBar'
import { useAuthContext } from '../context/auth-context'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { getUserLogin } from '../reducer/user/user'

const Header = ({
  toggleVisibility,
  toggleActiveMenu,
  isActive,
}: ToggleActive) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const { userExist } = useAuthContext()

  const distpach = useDispatch<AppDispatch>()
  const userLogin = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (userExist?.user) {
      distpach(getUserLogin(userExist?.user))
    }
  }, [distpach, userExist])

  return (
    <header className="bg-black flex flex-row justify-between py-1 md:py-2 px-2 md:px-4 relative">
      <div className="flex flex-col items-end">
        <h2 className="text-white text-2xl font-extrabold md:text-5xl">
          GRANDHOTEL
        </h2>
        <span className="text-background-second text-[10px] font-bold md:text-lg">
          GRANDHOTEL BERLIN
        </span>
      </div>

      <section className="text-color-text-second flex flex-col items-end">
        <Clock />
        <div className="flex gap-5">
          {userExist ? (
            <div className="flex flex-row items-center gap-3">
              {userLogin[0]?.photo ? (
                <img
                  className="w-10 h-10 rounded-[50%]"
                  src={userLogin[0]?.photo}
                  alt=""
                />
              ) : (
                <p className="w-10 h-10 rounded-[50%] border-2 border-background-second text-center text-2xl font-bold text-white">
                  {userLogin[0]?.name?.charAt(0)}
                </p>
              )}
              <span className="font-light hidden sm:block">
                {userLogin[0]?.name}
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
