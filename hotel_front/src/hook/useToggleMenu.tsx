import { useState } from 'react'

const useToggleMenu = (initialVisibility: boolean = true) => {
  const [isActive, setIsActive] = useState<boolean>(initialVisibility)

  const toggleActiveMenu = () => {
    setIsActive((visible) => !visible)
  }

  return { isActive, toggleActiveMenu, setIsActive }
}

export { useToggleMenu }
