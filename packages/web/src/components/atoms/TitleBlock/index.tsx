interface TitleBlockProps {
  name: string;
  classNames?: string;
}

export const TitleBlock = ({ name, classNames }: TitleBlockProps) => {
  const defaultClasses =
    "text-white text-[clamp(40px,4.5vw,80px)]  font-extrabold z-10";

  return <h2 className={`${defaultClasses} ${classNames}`}>{name}</h2>;
};
