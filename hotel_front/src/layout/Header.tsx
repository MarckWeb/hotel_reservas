import Clock from '../components/Clock'
import { FaUser } from 'react-icons/fa6'
import Weather from '../components/Weather'
import { ToggleActive } from '../types/toggle'
import { useLocation } from 'react-router-dom'
import Navbar from '../layout/NavBar'
import { useAuthContext } from '../context/auth-context'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { getUserLogin } from '../reducer/user/user'
import BorderElememts from '../hook/BorderElememts'

const Header = ({
  toggleVisibility,
  toggleActiveMenu,
  isActive,
}: ToggleActive) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [headerImage, setHeaderImage] = useState<string | null>(null)
  const { userExist } = useAuthContext()

  const distpach = useDispatch<AppDispatch>()
  const userLogin = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (userExist?.user) {
      distpach(getUserLogin(userExist?.user))
    }
  }, [distpach, userExist])

  useEffect(() => {
    if (userLogin[0]?.photo) {
      setHeaderImage(userLogin[0]?.photo)
    }
  }, [userLogin])

  return (
    <header className="bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 flex flex-row justify-between  p-2 md:px-4 relative ">
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-col items-center  ">
          <img className="w-16 h-16 " src="/hotel.png" alt="" />
          <p className="text-xs  text-background-second border border-background-second">
            GRANDHOTEL
          </p>
        </div>
        <h2 className="text-white text-2xl font-extrabold md:text-5xl hidden md:block mt-10">
          GRANDHOTEL
        </h2>
      </div>

      <section className="text-white flex flex-row items-center gap-3 md:gap-5 ">
        <div className="flex flex-col items-center">
          <BorderElememts>
            <div className="m-auto">
              {userExist ? (
                <>
                  {headerImage ? (
                    <img
                      className="w-12 h-12 md:w-16 md:h-16 rounded-[50%]"
                      src={headerImage}
                      alt=""
                    />
                  ) : (
                    <p className="w-12 h-12 md:w-16 md:h-16 rounded-[50%] border-2 border-background-second text-2xl md:text-4xl font-bold text-white text-center p-2">
                      {userLogin[0]?.name?.charAt(0).toUpperCase()}
                    </p>
                  )}
                </>
              ) : (
                <div
                  className="cursor-pointer  m-auto"
                  onClick={toggleVisibility}
                >
                  <FaUser className="text-3xl text-background-second" />
                </div>
              )}
            </div>
          </BorderElememts>

          {userExist ? (
            <p className="text-[12px]  md:text-sm font-extralight mt-1 md:mt-3  ">
              {userLogin[0]?.name}
            </p>
          ) : (
            <p
              className="text-[12px]  md:text-sm font-extralight mt-1 md:mt-3 "
              onClick={toggleVisibility}
            >
              Registrarme
            </p>
          )}
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
