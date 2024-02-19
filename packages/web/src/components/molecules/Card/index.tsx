import { TransparentWrapper } from "../../atoms/TransparentWrapper";
import { Button } from "../../atoms/Button";
import { MdArrowOutward } from "react-icons/md";

interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string;
  skills?: string[];
}

interface Project {
  projectName: string;
  description: string;
  projectLink: string;
  skills?: string[];
}

type CardProps = Experience | Project;

export const Card = (props: CardProps) => {
  const isExperience = "position" in props;
  return (
    <TransparentWrapper
      additionalClasses={`flex gap-[clamp(20px,3vw,45px)] p-[clamp(28px,4vw,50px)] max-w-[955px] ${
        isExperience ? "xl:flex-col-reverse" : "xl:flex-col"
      }`}
    >
      <div className="w-3/4 flex flex-col gap-[clamp(20px,4vw,40px)] xl:w-full">
        <div className="">
          {isExperience ? (
            <h2 className="text-[clamp(24px,4vw,30px)]">{props.position}</h2>
          ) : (
            <a
              href={props.projectLink}
              className=" text-[clamp(24px,4vw,30px)] items-center"
            >
              <span className="inline-flex items-center gap-3 sm:gap-2">
                {props.projectName} <MdArrowOutward />
              </span>
            </a>
          )}
          {isExperience && (
            <h3 className="text-[20px] text-gray-500 font-medium mt-[10px]">
              {props.company}
            </h3>
          )}
        </div>
        <p className="text-[clamp(16px,3vw,20px)] text-gray-500 font-medium">
          {props.description}
        </p>
        {props.skills && (
          <ul className="flex flex-wrap gap-[clamp(12px,3vw,20px)]">
            {props.skills.map((item, index) => (
              <Button
                key={index}
                classNames="cursor-default bg-white20 rounded-[8px] p-[8px] bg-white10"
                label={item}
              />
            ))}
          </ul>
        )}
      </div>

      <div
        className={`${
          !isExperience ? "w-1/2" : "w-1/4"
        } text-center xl:w-full xl:text-left`}
      >
        {!isExperience ? (
          <iframe
            src={props.projectLink}
            style={{
              width: "100%",
              borderRadius: "14px",
              aspectRatio: "16 / 10",
              backgroundColor: "white",
            }}
          ></iframe>
        ) : (
          <time className="text-[16px] text-gray-500 font-medium block mt-[14px]">
            {props.startDate} — {props.startDate || "Present"}
          </time>
        )}
      </div>
    </TransparentWrapper>
  );
};