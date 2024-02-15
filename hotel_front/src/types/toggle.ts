import { SetStateAction } from "react"

export interface ToggleActive {
   toggleVisibility?: () => void
   toggleActiveMenu?: () => void
   isActive?: boolean
   setIsActive?: (isActive: boolean) => void;
}