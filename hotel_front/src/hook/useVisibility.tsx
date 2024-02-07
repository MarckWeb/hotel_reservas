import { useState } from 'react'

const useVisibility = (initialVisibility: boolean = false) => {
   const [isVisible, setIsVisible] = useState<boolean>(initialVisibility)

   const toggleVisibility = () => {
      setIsVisible((visible) => !visible)
   }

   return { isVisible, toggleVisibility }
}

export { useVisibility }
