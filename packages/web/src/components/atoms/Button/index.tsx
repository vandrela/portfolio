interface ButtonProps {
  classNames: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  classNames = "",
  label = "some button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`border-y-[1.5px] border-y-white20 border-solid leading-normal rounded-2xl transition duration-500 ease-in-out ${
        onClick ? "hover:bg-white30" : ""
      } ${classNames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
