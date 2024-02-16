import { Link } from "react-router-dom";

export interface ProfileItemProps {
  id: number;
  profiler_name: string;
  profiler_img: string;
  profiler_role: string;
}
export const ProfileItem = ({
  id,
  profiler_name,
  profiler_img,
  profiler_role,
}: ProfileItemProps) => {
  // const handleId
  return (
    <li className="group hover:border hover:border-gray-600 hover:bg-white03 rounded-[20px] p-4 hover:p-[15px] sm:hover:bg-transparent sm:border-none sm:p-0 sm:hover:p-[0px] ">
      <div className="flex flex-col gap-[clamp(16px,4vw,40px)] h-full">
        <img
          src={profiler_img}
          alt={`Photo ${profiler_name}`}
          className="object-cover flex-[auto] rounded-xl"
        />
        <div className="flex flex-col items-center ">
          <h3 className="text-white text-center text-[clamp(16px,3vw,32px)] font-semibold mb-[clamp(8px,2vw,20px)] ">
            {profiler_name}
          </h3>
          <div className=" w-[65%] h-[1px] bg-white20" />

          <span className="text-white text-[clamp(12px,2vw,20px)] font-base  border-white20 pt-3 font-normal sm:border-none  ">
            {profiler_role}
          </span>
        </div>
        <Link
          className={`text-center py-[clamp(9px,2vw,16px)] text-white font-normal text-[clamp(12px,2vw,20px)] w-[clamp(120px,20vw,205px)] mx-auto group-hover:w-full duration-500  group-hover:bg-white20 rounded-[clamp(4px,2vw,10px)] bg-gray-300/10 rounded-2xl border-y-[1.5px] border-y-white20 border-solid  leading-normal`}
          to={`/${id}`}
        >
          View profiler
        </Link>
      </div>
    </li>
  );
};
