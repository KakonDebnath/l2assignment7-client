import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';

type TInputProps = {
  label: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors<FieldValues>;
  type: string;
  name: string;
  defaultValue?: string;
};

export const Input = ({ label, register, errors, type, name, defaultValue }: TInputProps) => {
  return (
    <div className="w-full max-w-sm space-y-3">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input
        className="w-full border p-2"
        type={type}
        id={name}
        {...register}
        placeholder={`Enter Your ${label} hare`}
        defaultValue={defaultValue}
      />
      {errors[name] && errors[name]?.message && (
        <span className="text-red-600">{errors[name]?.message as string}</span>
      )}
    </div>
  );
};
