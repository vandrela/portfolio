import { useParams } from "react-router-dom";
import { ThankYou } from "../components/molecules/ThankYouAkaFooter";
import { MainProfileBlock } from "../components/molecules/MainProfileBlock";
import { Header } from "../components/molecules/Header";
import { Card } from "../components/molecules/Card";
import { FlexContainer } from "../components/molecules/FlexContainer";
import { useMediaQuery } from "@react-hook/media-query";
import { TransparentWrapper } from "../components/atoms/TransparentWrapper";
import { Navigation } from "../components/molecules/Navigation";

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
    { link: "https://www.linkedin.com/in/pavlobodjo/", icon: "linkediN" },
    { link: "https://twitter.com/yourusername1", icon: "github" },
    { link: "https://twitter.com/yourusername2", icon: "twitter" },
    { link: "https://twitter.com/yourusername3", icon: "facebook" },
    //  { link: "https://github.com/yourusername", icon: "giThub" },
    // { link: "https://github.com/yourusername", icon: "insTagram" },
    // { link: "https://github.com/yourusername", icon: "insTagram" },
  ],
  details: {
    aboutMe: {
      label: "About Me",
      data: [
        "I'm a frontend developer with a deep passion for surfing. It's more than just a hobby; it's a lifestyle that fuels my work.",
        "Each morning, I rise before the sun, check the surf report, and head to the beach. There's something enchanting about the water, the waves, and the salty breeze. Surfing demands focus and balance, much like coding.",
        "Surfing teaches me patience and adaptability, similar to debugging and problem-solving in development. The ocean's unpredictability mirrors the endless possibilities in web development.",
        "The freedom of riding a wave parallels the satisfaction of solving coding challenges. My love for surfing and my career beautifully complement each other, keeping me grounded in nature while navigating the digital world.",
      ],
    },
    skillsAndRequirements: {
      label: "Skills & Requiremets",
      data: [
        {
          category: "Positions",
          value: "Front end",
        },
        {
          category: "Core skills",
          value: "React, Typescript, Redux",
        },
        {
          category: "Other skills",
          value: "GraphQL, Storybook, HTML/CSS",
        },
        {
          category: "Seniority",
          value: "Mid, Senior",
        },
        {
          category: "Work eligibility",
          value: "UK (temp. eligible), EU (fully eligible)",
        },
        {
          category: "Preferred locations",
          value: "Not specified",
        },
      ],
    },
    experience: {
      label: "Experience",
      data: [
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
    },
    projects: {
      label: "Projects",
      data: [
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
    },
  },
};

export const ProfilerPage = () => {
  let { profilerId } = useParams();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const {
    profileData,
    details,
    details: { experience, projects, aboutMe, skillsAndRequirements },
    socialLinks,
  } = userProfile;

  const navigationItems = Object.keys(details).map((key) => {
    return { label: (details as any)[key].label };
  });

  return (
    <section className="px-[clamp(25px,6vw,100px)]">
      {/* Pavlo's Header here ----> */}
      <Header socialLinks={socialLinks} />
      {/* <---- Pavlo's Header here*/}
      {/* All other components ----> */}
      <main className="text-white">
        <MainProfileBlock {...profileData} />
        <div className="flex gap-[clamp(30px,3vw,60px)] max-w-[1300px] mx-auto overflow-auto">
          <div className="max-w-[995px]">
            <FlexContainer title={aboutMe.label}>
              <TransparentWrapper additionalClasses="!p-[clamp(28px,3vw,50px)] max-w-[955px]">
                <h2 className="text-4xl font-medium mb-10">Discover me</h2>
                {aboutMe.data.map((item) => (
                  <p className="text-[clamp(16px,1.3vw,20px)] font-normal mb-[clamp(10px,3vw,20px)]">
                    {item}
                  </p>
                ))}
              </TransparentWrapper>
            </FlexContainer>
            <FlexContainer title={skillsAndRequirements.label}>
              <TransparentWrapper additionalClasses="flex flex-col gap-[clamp(20px,4vw,40px)] !p-[clamp(28px,3vw,50px)] max-w-[955px]">
                {skillsAndRequirements.data.map((elem) => (
                  <div className="flex gap-[clamp(22px,3vw,56px)] xs:flex-col xs:gap-1">
                    <div className="w-1/3 font-semibold text-[clamp(14px,2vw,20px)] xs:w-full">
                      {elem.category}
                    </div>
                    <div className="w-2/3 text-[clamp(12px,2.2vw,18px)] xs:w-full">
                      {elem.value}
                    </div>
                  </div>
                ))}
              </TransparentWrapper>
            </FlexContainer>
            <FlexContainer title={experience.label}>
              {experience.data.map((experience) => (
                <Card key={experience.description} {...experience} />
              ))}
            </FlexContainer>
            <FlexContainer title={projects.label}>
              {projects.data.map((project) => (
                <Card key={project.projectLink} {...project} />
              ))}
            </FlexContainer>
          </div>
          {!isSmallScreen && (
            <aside className="min-w-[30%]">
              <Navigation
                socialLinks={socialLinks}
                navigationItems={navigationItems}
              />
            </aside>
          )}
        </div>
      </main>

      {/* <---- All other components */}
      <ThankYou />
    </section>
  );
};
