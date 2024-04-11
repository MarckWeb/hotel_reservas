
import { UseFormRegister } from "react-hook-form";
import { IconBaseProps } from "react-icons";

export interface LoginValues {
   username: string
   password: string
}

export interface FormValues extends LoginValues {
   name: string
}

export interface ValueMessage {
   value: number;
   message: string;
}

export interface FormFieldProps {
   name: keyof FormValues;
   icon: React.ReactElement<IconBaseProps>;
   register: UseFormRegister<FormValues>;
   type: string;
   required?: boolean | {
      value: boolean;
      message: string;
   };
   minLength?: number | ValueMessage;
   maxLength?: number | ValueMessage;
   errorMessage?: string;
   placeholder: string
}


type ButtonTypes = "reset" | "submit" | "button" | undefined
export interface ButtonProps {
   type: ButtonTypes
   text: string
   onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

