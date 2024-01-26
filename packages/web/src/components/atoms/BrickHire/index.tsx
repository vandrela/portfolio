import { Button } from "../Button";

interface HireBrickProps {
  image: string;
  name: string;
  role: string;
  buttonLabel: string;
  classNames?: string;
}

export const HireBrick = ({
  image,
  name,
  role,
  buttonLabel,
  classNames,
}: HireBrickProps) => {
  const defaultClasses =
    "flex w-full items-center text-white text-[clamp(1rem,10vw,2rem)] font-extrabold transition-transform transform hover:scale-105 hover:bg-white hover:bg-opacity-20 hover:shadow-lg p-4 rounded transition duration-500 ease-out";

  const handleHireClick = () => {
    alert(`${name} Hired !`);
  };

  return (
    <div className={`${defaultClasses} ${classNames}`}>
      <div className="w-1/5 text-center">
        <img src={image} alt={name} className="h-auto w-auto" />
      </div>
      <div className="w-3/5 text-center">
        <h6 className="mb-1 lg:text-base">{name}</h6>
        <p className="text-base lg:text-xs">{role}</p>
      </div>
      <div className="w-1/5 text-center">
        <Button
          label={"Hire"}
          onClick={handleHireClick}
          classNames={"text-xl px-8 py-2 lg:px-4 lg:py-1 lg:text-xs"}
        />
      </div>
    </div>
  );
};
