import { useParams } from "react-router-dom";
import { ThankYou } from "../components/molecules/ThankYouAkaFooter";
import { Button } from "../components/atoms/Button";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { MainProfileBlock } from "../components/molecules/MainProfileBlock";

export const ProfilerPage = () => {
  let { profilerId } = useParams();
  //Dummy data
  const profileData = {
    name: "Abu Adams",
    profession: "Front End Developer",
    description:
      "Open to hearing from remote Blockchain, Health and Fitness and HealthTech companies about Front End Developer positions",
    imageUrl: "/images/dummyPhoto.png",
  };

  return (
    <section>
      {/* Pavlo's Header here ----> */}
      <header className="flex items-center justify-between text-white h-[clamp(100px,10vw,150px)] mb-[clamp(30px,5vw,80px)]">
        <Button
          classNames="p-5 bg-white20 px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)]"
          label="Download CV "
        />
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/pavlobodjo/">
            <RiLinkedinFill
              style={{
                height: "4rem",
                width: "4rem",
                border: "1px solid white",
                padding: "6px",
                borderRadius: "10px",
              }}
            />
          </a>
          <PiGithubLogoFill
            style={{
              height: "4rem",
              width: "4rem",
              border: "1px solid white",
              padding: "6px",
              borderRadius: "10px",
            }}
          />
          <RiTwitterXFill
            style={{
              height: "4rem",
              width: "4rem",
              border: "1px solid white",
              padding: "6px",
              borderRadius: "10px",
            }}
          />
        </div>
      </header>
      {/* <---- Pavlo's Header here*/}
      {/* All other components ----> */}
      <main className="text-white">
        <MainProfileBlock {...profileData} />
      </main>
      {/* <---- All other components */}
      <ThankYou />
    </section>
  );
};
