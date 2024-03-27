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
      className={`border-y-[1.5px] border-y-white20 border-solid leading-normal rounded-[clamp(7px,1vw,16px)] transition duration-500 ease-in-out ${
        onClick ? "hover:bg-white30 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300" : ""
      } ${classNames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
