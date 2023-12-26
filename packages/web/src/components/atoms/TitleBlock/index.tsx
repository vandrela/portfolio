interface TitleBlockProps {
  name: string;
  classNames?: string;
}

export const TitleBlock = ({ name, classNames }: TitleBlockProps) => {
  const defaultClasses =
    "text-white text-[clamp(40px,6vw,80px)]  font-extrabold";

  return <h2 className={`${defaultClasses} ${classNames}`}>{name}</h2>;
};
