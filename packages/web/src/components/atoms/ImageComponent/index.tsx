interface ImageComponentProps {
  src: string;
  alt: string;
  classNames: string;
}
export const ImageComponent = ({
  src,
  alt,
  classNames,
}: ImageComponentProps) => {
  console.log(classNames);
  return <img src={src} alt={alt} className={`${classNames}`} />;
};
