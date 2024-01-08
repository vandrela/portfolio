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
      className={`bg-white20 rounded-2xl border-y-[1.5px] border-y-white20 border-solid font-semibold leading-normal ${classNames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
