
export interface ToggleActive {
   toggleVisibility?: () => void
   toggleActiveMenu?: () => void
   isActive?: boolean
   isVisible?: boolean
   setIsActive?: (isActive: boolean) => void;
}