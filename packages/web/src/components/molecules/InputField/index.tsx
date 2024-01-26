import { useFormContext } from "react-hook-form";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  rules?: Record<string, unknown>;
  classNames?: string;
  placeholder?: string;
}

export const InputField = ({
  label,
  placeholder = "",
  classNames = "",
  rules = {},
  ...rest
}: InputFieldProps) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col">
      <label
        className="text-white text-[clamp(16px,2vw,28px)] font-normal mb-[10px]"
        htmlFor={rest.id}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        {...rest}
        {...register(rest.name, rules)}
        className={`text-white text-[clamp(16px,3vw,28px)] rounded-[10px] border border-solid border-[rgba(255,255,255,0.30)] bg-transparent p-[clamp(12px,2vw,17px)] w-full ${classNames}`}
      />
    </div>
  );
};
