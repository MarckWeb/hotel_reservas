import { useEffect, useState } from 'react';

interface Location {
   latitude: number,
   longitude: number
}

function useLocation() {
   const [location, setLocation] = useState<Location>();


   useEffect(() => {
      if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               const latitude = position.coords.latitude;
               const longitude = position.coords.longitude;
               setLocation({ latitude, longitude });
            },
            (error) => {
               console.error(error.message)
            }
         );
      } else {
         console.info('La geolocalización no es compatible con este navegador.');
      }
   }, []);

   return { location };
}

export default useLocation;