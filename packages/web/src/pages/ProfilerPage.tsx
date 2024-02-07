import { useParams } from "react-router-dom";
import { ThankYou } from "../components/molecules/ThankYouAkaFooter";
import { Button } from "../components/atoms/Button";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
export const ProfilerPage = () => {
  let { profilerId } = useParams();

  console.log(profilerId, "params");
  return (
    <>
      <section className="h-screen">
        {/* Pavlo's Header here ----> */}
        <header className=" flex items-center justify-between text-white h-[150px] block  px-40 ">
          <Button
            classNames="p-5 bg-white20 px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)]"
            label="Download CV "
          />
          <section className=" flex gap-6 ">
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
          </section>
        </header>
        {/* <---- Pavlo's Header here*/}
        {/* All other components ----> */}
        <main className="bg-blue text-white">Main</main>
        {/* <---- All other components */}
        <ThankYou />
      </section>
    </>
  );
};
