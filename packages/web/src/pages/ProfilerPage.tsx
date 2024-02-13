import { useParams } from "react-router-dom";
import { ThankYou } from "../components/molecules/ThankYouAkaFooter";
import { Button } from "../components/atoms/Button";
import { MainProfileBlock } from "../components/molecules/MainProfileBlock";
import { SocialIcons } from "../components/molecules/SocialIcons";

//Dummy data
const userProfile = {
  profileData: {
    name: "Abu Adams",
    profession: "Front End Developer",
    description:
      "Open to hearing from remote Blockchain, Health and Fitness and HealthTech companies about Front End Developer positions",
    imageUrl: "/images/dummyPhoto.png",
  },
  socialLinks: [
    { link: "https://www.linkedin.com/in/pavlobodjo/", icon: "Linkedin" },
    { link: "https://twitter.com/yourusername", icon: "yoUtube" },
    { link: "https://twitter.com/yourusername", icon: "twitter" },
    { link: "https://twitter.com/yourusername", icon: "facebook" },
    { link: "https://github.com/yourusername", icon: "giThub" },
    { link: "https://github.com/yourusername", icon: "insTagram" },
    // { link: "https://github.com/yourusername", icon: "insTagram" },
  ],
};

export const ProfilerPage = () => {
  let { profilerId } = useParams();

  return (
    <section className="px-[clamp(32px,8vw,100px)]">
      {/* Pavlo's Header here ----> */}
      <header className="flex items-center justify-between text-white h-[clamp(100px,10vw,150px)] mb-[clamp(30px,5vw,80px)] max-w-[1700px] mx-auto">
        <Button
          classNames="p-5 bg-white20 px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)]"
          label="Download CV"
        />
        <SocialIcons socialLinks={userProfile.socialLinks} />
      </header>
      {/* <---- Pavlo's Header here*/}
      {/* All other components ----> */}
      <main className="text-white">
        <MainProfileBlock {...userProfile.profileData} />
      </main>
      {/* <---- All other components */}
      <ThankYou />
    </section>
  );
};
