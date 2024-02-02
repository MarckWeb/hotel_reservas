import { UseFormRegister, FieldError, FieldValues } from 'react-hook-form';

export interface FormValues {
   name: string
   username: string
   password: string
   register: UseFormRegister<FieldValues>;
   formState: {
      erros: UseFormRegister<FieldError>
   }

}