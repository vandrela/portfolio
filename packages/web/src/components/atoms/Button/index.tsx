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
      className={`rounded-2xl border-y-[1.5px] border-y-white20 border-solid  leading-normal ${classNames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
