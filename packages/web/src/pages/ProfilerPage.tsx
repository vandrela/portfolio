import { useParams } from "react-router-dom";
import { ThankYou } from "../components/molecules/ThankYouAkaFooter";
import { MainProfileBlock } from "../components/molecules/MainProfileBlock";
import { Header } from "../components/molecules/Header";
import { Card } from "../components/molecules/Card";
import { FlexContainer } from "../components/molecules/FlexContainer";
import { useMediaQuery } from "@react-hook/media-query";
import { TransparentWrapper } from "../components/atoms/TransparentWrapper";

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
    { link: "https://twitter.com/yourusername1", icon: "github" },
    { link: "https://twitter.com/yourusername2", icon: "twitter" },
    { link: "https://twitter.com/yourusername3", icon: "facebook" },
    // { link: "https://github.com/yourusername", icon: "giThub" },
    // { link: "https://github.com/yourusername", icon: "insTagram" },
    // { link: "https://github.com/yourusername", icon: "insTagram" },
  ],
  experience: [
    {
      position: "Senior Frontend Developer",
      company: "CompanyName",
      startDate: "2021-09-12",
      endDate: null,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      skills: [
        "React",
        "React Native",
        "PHP",
        "JavaScript",
        "WordPress",
        "TypeScript",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "AnotherCompany",
      startDate: "2020-05-20",
      endDate: "2021-08-30",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices lorem, vel eleifend lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices lorem, vel eleifend lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      skills: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      position: "UI/UX Designer",
      company: "DesignStudio",
      startDate: "2019-03-15",
      endDate: "2020-03-15",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    },
  ],
  projects: [
    {
      projectName: "Apple Project",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      projectLink: "https://www.hauserwirth.com",
      skills: [
        "React",
        "React Native",
        "CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "HTML",
        "CSS",
      ],
    },
    {
      projectName: "Apple Project",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      projectLink: "https://www.ivadentpraha.cz/",
      skills: ["React", "React Native"],
    },
  ],
};

export const ProfilerPage = () => {
  let { profilerId } = useParams();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { profileData, experience, socialLinks, projects } = userProfile;

  return (
    <section className="px-[clamp(32px,8vw,100px)]">
      {/* Pavlo's Header here ----> */}
      <Header socialLinks={socialLinks} />
      {/* <---- Pavlo's Header here*/}
      {/* All other components ----> */}
      <main className="text-white">
        <MainProfileBlock {...profileData} />
        <div className="flex gap-[clamp(30px,3vw,60px)] max-w-[1300px] mx-auto">
          <div className="max-w-[995px]">
            <FlexContainer title="About me">
              <TransparentWrapper additionalClasses=" !p-[clamp(28px,4vw,50px)]">
                <h2 className="text-4xl font-semibold mb-10"> Discover me</h2>
                <p className="text-[clamp(16px,3vw,20px)]  font-medium ">
                  I'm a frontend developer with a deep passion for surfing. It's
                  more than just a hobby; it's a lifestyle that fuels my work.
                  Each morning, I rise before the sun, check the surf report,
                  and head to the beach. There's something enchanting about the
                  water, the waves, and the salty breeze. Surfing demands focus
                  and balance, much like coding. Surfing teaches me patience and
                  adaptability, similar to debugging and problem-solving in
                  development. The ocean's unpredictability mirrors the endless
                  possibilities in web development. The freedom of riding a wave
                  parallels the satisfaction of solving coding challenges. My
                  love for surfing and my career beautifully complement each
                  other, keeping me grounded in nature while navigating the
                  digital world.
                </p>
              </TransparentWrapper>
            </FlexContainer>
            <FlexContainer title="Skills & Requiremets">
              <TransparentWrapper additionalClasses=" flex flex-col gap-10 !p-[clamp(28px,4vw,50px)]">
                <div className="flex w-full gap-14">
                  {/* Positions Front end Core skills React, Typescript, Redux Other
                  skills GraphQL, Storybook, HTML/CSS Seniority Mid, Senior Work
                  eligibility UK (temp. eligible), EU (fully eligible) Preferred
                  locations Not specified */}
                  <div className="w-1/3 font-semibold text-2xl">Positions</div>
                  <div className="w-2/3 text-2xl">Front end</div>
                </div>
                <div className="flex w-full gap-14">
                  {/* Positions Front end  React, Typescript, Redux Other
                  skills GraphQL, Storybook, HTML/CSS Seniority Mid, Senior Work
                  eligibility UK (temp. eligible), EU (fully eligible) Preferred
                  locations Not specified */}
                  <div className="w-1/3 font-semibold text-2xl">
                    Core skills
                  </div>
                  <div className="w-2/3 text-2xl">React, Typescript, Redux</div>
                </div>
                <div className="flex w-full gap-14">
                  {/* Positions Front end Core skills React, Typescript, Redux Other
                  skills GraphQL, Storybook, HTML/CSS Seniority Mid, Senior Work
                  eligibility UK (temp. eligible), EU (fully eligible) Preferred
                  locations Not specified */}
                  <div className="w-1/3 font-semibold text-2xl">Positions</div>
                  <div className="w-2/3 text-2xl">Front end</div>
                </div>
              </TransparentWrapper>
            </FlexContainer>
            <FlexContainer title="Experience">
              {experience.map((experience) => (
                <Card key={experience.description} {...experience} />
              ))}
            </FlexContainer>
            <FlexContainer title="Projects">
              {projects.map((project) => (
                <Card key={project.projectLink} {...project} />
              ))}
            </FlexContainer>
          </div>
          {!isSmallScreen && (
            <div className="flex-1 min-w-[25%]">NAVIGATION COMPONENT</div>
          )}
        </div>
      </main>
      {/* <---- All other components */}
      <ThankYou />
    </section>
  );
};
