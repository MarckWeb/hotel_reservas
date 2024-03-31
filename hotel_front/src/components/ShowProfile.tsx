import React from 'react'
import { FaImages } from 'react-icons/fa'
interface PropsShowProfile {
  selectedImage: string
  photoUser: string
  userName: string
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ShowProfile: React.FC<PropsShowProfile> = ({
  selectedImage,
  photoUser,
  userName,
  handleFile,
}) => {
  return (
    <div className="w-full h-[120px] bg-wallpaper bg-center bg-cover relative border-4 rounded-t-lg border-background-second">
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%]  inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-[50%] w-[120px] h-[120px]">
        <figure className="absolute top-[50%] left-[50%] w-[110px] h-[110px] rounded-[50%] translate-x-[-50%] translate-y-[-50%] ">
          {selectedImage ? (
            <img
              className="w-full h-full rounded-[50%]"
              src={selectedImage}
              alt="Profile"
            />
          ) : (
            photoUser && (
              <img
                className="w-full h-full rounded-[50%]"
                src={photoUser}
                alt="Selected Profile"
              />
            )
          )}
        </figure>

        <h3
          className={`${selectedImage || photoUser ? 'hidden' : 'block'} text-center text-7xl p-5`}
        >
          {userName?.charAt(0)}
        </h3>

        <div className="absolute bottom-[10px] right-0 bg-backgroun-title p-1 rounded ">
          <label htmlFor="photo">
            <FaImages className="text-xl text-white cursor-pointer" />
          </label>
          <input
            className="hidden"
            type="file"
            name="photo"
            id="photo"
            onChange={handleFile}
          />
        </div>
      </div>
    </div>
  )
}

export default ShowProfile
