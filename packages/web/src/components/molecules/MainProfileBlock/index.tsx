interface MainProfileBlockProps {
  name: string;
  profession: string;
  description: string;
  imageUrl: string;
}
export const MainProfileBlock = ({
  name,
  profession,
  description,
  imageUrl,
}: MainProfileBlockProps) => {
  return (
    <div className="flex  mx-auto gap-[clamp(20px,4vw,40px)] max-w-[1300px] sm:flex-col">
      <div className="w-1/2 flex flex-col justify-center sm:w-full">
        <h2 className="text-[clamp(35px,4vw,60px)] font-bold sm:text-[clamp(30px,6vw,60px)]">
          Hi There! <br />
          I'm {name}
        </h2>
        <span className="text-[clamp(24px,3vw,32px)] font-normal sm:text-[clamp(18px,4vw,32px)] mt-[clamp(5px,2vw,15px)]">
          {profession}
        </span>
        <p className="text-[clamp(20px,2vw,24px)] font-normal max-w-[535px] text-[#afafaf] mt-[clamp(15px,4vw,40px)] sm:text-[clamp(14px,4vw,24px)] sm:max-w-none">
          {description}
        </p>
      </div>
      <div className="w-1/2 flex flex-col justify-center sm:w-full">
        <div className="self-center w-full">
          <img
            className="object-cover w-full mx-auto max-w-[500px] sm:max-w-[400px]"
            src={imageUrl}
            alt={`alt-text`}
          />
        </div>
      </div>
    </div>
  );
};
