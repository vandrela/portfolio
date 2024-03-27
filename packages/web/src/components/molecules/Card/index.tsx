import { TransparentWrapper } from "../../atoms/TransparentWrapper";
import { Button } from "../../atoms/Button";
import { MdArrowOutward } from "react-icons/md";
import { formatDate } from "../../../utils/dataHelper";

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
      additionalClasses={`flex gap-[clamp(20px,2.2vw,45px)] p-[clamp(28px,3vw,50px)] max-w-[955px] ${
        isExperience ? "2xl:flex-col-reverse" : "flex-col"
      } !p-[clamp(28px,3vw,85px)]`}
    >
      <div
        className={`${
          isExperience ? "w-3/4" : "w-full"
        } flex flex-col gap-[clamp(20px,4vw,40px)] 2xl:w-full `}
      >
        <div className="">
          {isExperience ? (
            <h2 className="text-[clamp(20px,4.5vw,30px)]">{props.position}</h2>
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
        <p className="text-[clamp(14px,1.4vw,30px)] text-gray-500 font-medium">
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
          !isExperience ? "w-full" : "w-1/4"
        } text-center 2xl:w-full 2xl:text-left`}
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
            {formatDate(props.startDate)} — {formatDate(props.endDate)}
          </time>
        )}
      </div>
    </TransparentWrapper>
  );
};
