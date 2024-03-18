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
    <header className="bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 flex flex-row justify-between  p-2 md:px-4 relative ">
      <div className="flex flex-col items-end  ">
        <h2 className="text-white text-2xl font-extrabold md:text-5xl hidden md:block">
          GRANDHOTEL
        </h2>
        <span className="text-background-second text-[10px] font-bold md:text-lg hidden md:block">
          GRANDHOTEL BERLIN
        </span>

        <div className="flex flex-col items-center md:hidden ">
          <img className="w-16 h-16 " src="/hotel.png" alt="" />
          <p className="text-xs  text-background-second border border-background-second">
            GRANDHOTEL
          </p>
        </div>
      </div>

      <section className="text-white flex flex-row items-center gap-3 md:gap-5 ">
        <div className="flex flex-col items-center">
          <div className="relative inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-[50%] w-14 h-14  md:w-[80px] md:h-[80px]">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  inset-0 w-[54px] h-[54px] md:w-[75px] md:h-[75px] bg-black rounded-[50%] flex">
              <div className="m-auto">
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
              </div>
            </div>
          </div>
          <p className="text-[12px]  md:text-sm font-extralight mt-1 md:mt-3  ">
            {userLogin[0]?.name}
          </p>
        </div>

        <Clock />
        <Weather />
      </section>

      {!isHomePage && (
        <Navbar isActive={isActive} toggleActiveMenu={toggleActiveMenu} />
      )}
    </header>
  )
}

export default Header
