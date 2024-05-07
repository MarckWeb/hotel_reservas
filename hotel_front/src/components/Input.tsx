import { FormFieldProps } from '../types/formValues'

const Input: React.FC<FormFieldProps> = ({
  name,
  icon,
  register,
  type,
  required,
  minLength,
  maxLength,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className="flex gap-2 items-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-900 py-1 px-2 rounded text-white">
      {icon}
      <input
        className="bg-transparent outline-none font-light placeholder:text-gray-600"
        type={type}
        autoComplete="off"
        {...register(name, {
          required:
            typeof required === 'object'
              ? required
              : required
                ? {
                    value: true,
                    message: errorMessage || 'Este campo es requerido',
                  }
                : false,
          minLength: minLength,
          maxLength: maxLength,
        })}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
