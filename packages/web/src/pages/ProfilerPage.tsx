import { useParams } from "react-router-dom";
import { ThankYou } from "../components/molecules/ThankYouAkaFooter";
import { MainProfileBlock } from "../components/molecules/MainProfileBlock";
import { Header } from "../components/molecules/Header";

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
    { link: "https://www.linkedin.com/in/pavlobodjo/", icon: "yOUtube" },
    { link: "https://twitter.com/yourusername", icon: "github" },
    { link: "https://twitter.com/yourusername", icon: "twitter" },
    { link: "https://twitter.com/yourusername", icon: "facebook" },
    // { link: "https://github.com/yourusername", icon: "giThub" },
    // { link: "https://github.com/yourusername", icon: "insTagram" },
    // { link: "https://github.com/yourusername", icon: "insTagram" },
  ],
};

export const ProfilerPage = () => {
  let { profilerId } = useParams();

  return (
    <section className="px-[clamp(32px,8vw,100px)]">
      {/* Pavlo's Header here ----> */}
      <Header socialLinks={userProfile.socialLinks} />
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
