import { TransparentWrapper } from "../../atoms/TransparentWrapper";
import { Button } from "../../atoms/Button";
import { SocialIcons } from "../SocialIcons";
import { useEffect, useState } from "react";
import { SocialLink } from "../SocialIcons";

interface NavigationProps {
  socialLinks?: SocialLink[];
  navigationItems: { label: string }[];
  isSmallScreen?: boolean;
  setOpen?: (value: React.SetStateAction<boolean>) => void;
  gradientColor?: string;
}
export const Navigation = ({
  socialLinks,
  navigationItems,
  isSmallScreen,
  setOpen,
  gradientColor,
}: NavigationProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      if (sections) {
        sections.forEach((section) => observer.unobserve(section));
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 75;
      const zoomFactor = !isSmallScreen ? 60 / 100 : 1;
      const rect = section.getBoundingClientRect();
      const topPos = rect.top * zoomFactor + window.pageYOffset - offset;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  };

  if (isSmallScreen) {
    return (
      <div className="fixed top-0 bottom-0 z-50 h-screen  w-full bg-darkIndigo">
        {gradientColor && (
          <div
            className={`transition-all absolute -translate-x-2/4 -translate-y-1/4 w-[100%] h-[100%] ${gradientColor} rounded-[50%] left-2/4 top-[-10%] blur-[175px] z-[-2]`}
          ></div>
        )}
        <div className="w-full  h-[100vh] flex flex-col justify-center px-[clamp(25px,6vw,100px)] gap-8">
          <nav className="mt-8">
            <ul className="flex flex-col text-[clamp(22px,4vw,32px)] text-white font-bold ">
              {navigationItems.map((item) => {
                return (
                  <li
                    key={item.label}
                    className="w-full text-center p-3 cursor-pointer"
                    onClick={() => {
                      setOpen && setOpen(false);
                      scrollToSection(item.label);
                    }}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex flex-col gap-4 text-white items-center">
            {socialLinks && (
              <Button
                classNames="bg-white20 px-[clamp(10px,2vw,10px)] py-[clamp(10px,2vw,16px)] rounded-[7px] text-[clamp(10px,1.3vw,20px)] w-full sm:w-[70%]"
                label="Download PDF"
              />
            )}
            {socialLinks && (
              <SocialIcons
                socialLinks={socialLinks}
                classNames="gap-[clamp(8px,1vw,30px)] !items-start"
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[clamp(10px,1.8vw,20px)] text-white  top-0 max-w-full">
      <TransparentWrapper additionalClasses="!p-[clamp(10px,1.5vw,30px)] min-h-0 rounded-[9px]">
        <h3 className="mb-[clamp(20px,3vw,40px)] text-[clamp(14px,2vw,20px)]">
          Navigation
        </h3>
        <nav>
          <ul className="flex flex-col gap-5 text-[clamp(12px,1.3vw,20px)] font-semibold">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <li
                  key={item.label}
                  className={`${
                    isActive ? "text-white" : "text-white/60"
                  } cursor-pointer hover:text-white transition duration-500 ease-in-out`}
                  onClick={() => scrollToSection(item.label)}
                >
                  <div className="flex items-center gap-[clamp(6px,1vw,12px)]">
                    <div
                      className={`${
                        isActive
                          ? "min-w-[clamp(40px,7vw,100px)] bg-white h-[2px]"
                          : "min-w-[clamp(20px,4vw,50px)] bg-white20"
                      } h-[1px] transition-all duration-500`}
                    ></div>
                    <span>{item.label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </TransparentWrapper>
      <TransparentWrapper additionalClasses="flex gap-[clamp(20px,2vw,38px)] !p-[clamp(10px,1.5vw,30px)] min-h-0 rounded-[9px] items-center">
        <span className="text-[clamp(20px,3vw,40px)] font-bold">CV</span>
        <Button
          classNames="bg-white20 px-[clamp(10px,2vw,10px)] py-[clamp(10px,2vw,16px)] rounded-[7px] text-[clamp(10px,1.3vw,20px)] w-full "
          label="Download PDF"
          onClick={() => {}}
        />
      </TransparentWrapper>
      {socialLinks && (
        <SocialIcons
          socialLinks={socialLinks}
          classNames="mx-auto gap-[clamp(8px,1vw,30px)]"
        />
      )}
    </div>
  );
};
