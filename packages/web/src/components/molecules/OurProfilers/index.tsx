import { TitleBlock } from "../../atoms/TitleBlock";
import { ProfileItem, ProfileItemProps } from "../ProfilerItem";

interface OurProfilersProps {
  profileData: ProfileItemProps[];
}

export const OurProfilers = ({ profileData }: OurProfilersProps) => {
  console.log(profileData, "profiler data");

  return (
    <section id="Our profilers" className="max-w-[2000px] mx-auto" >
      <TitleBlock classNames="text-center text-white" name="Our profilers" />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(min-content,clamp(167px,35vw,375px)))]  gap-[clamp(16px,4vw,60px)] mx-4 mt-[clamp(40px,9vw,80px)] mb-[clamp(80px,20vw,347px)] justify-center">
        {profileData?.map((profile) => (
          <ProfileItem key={profile.id} {...profile} />
        ))}
      </ul>
    </section>
  );
};
