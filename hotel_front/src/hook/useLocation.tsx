import { useEffect, useState } from 'react'

interface Location {
  latitude: number
  longitude: number
}

function useLocation() {
  const [location, setLocation] = useState<Location>()

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          setLocation({ latitude, longitude })
        },
        (error) => {
          console.error(error.message)
        },
      )
    }
  }, [])

  return { location }
}

export default useLocation
