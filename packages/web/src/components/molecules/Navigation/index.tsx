import { TransparentWrapper } from "../../atoms/TransparentWrapper";
import { Button } from "../../atoms/Button";
import { SocialIcons } from "../SocialIcons";

export const Navigation = ({ socialLinks, navigationItems }: any) => {
  const isActive = true;

  const scrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-[clamp(10px,1.8vw,20px)] text-white">
      <TransparentWrapper additionalClasses="!p-[clamp(10px,1.5vw,30px)] min-h-0 rounded-[9px]">
        <h3 className="mb-[clamp(20px,3vw,40px)] text-[clamp(14px,2vw,20px)]">
          Navigation
        </h3>
        <nav>
          <ul className="flex flex-col gap-5 text-[clamp(12px,1.5vw,20px)]">
            {navigationItems.map((item: any) => (
              <li
                className={isActive ? "text-white" : "text-white/60"}
                onClick={() => scrollToSection(item.label)}
              >
                <div className="flex items-center gap-[clamp(6px,1vw,12px)] font-bold">
                  <div
                    className={` ${
                      isActive
                        ? "min-w-[clamp(40px,7vw,100px)] bg-white"
                        : "min-w-[clamp(20px,4vw,50px)] bg-white20"
                    } h-[1px] `}
                  ></div>
                  <span> {item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </TransparentWrapper>
      <TransparentWrapper additionalClasses="flex gap-[clamp(20px,2vw,38px)] !p-[clamp(10px,1.5vw,30px)] min-h-0 rounded-[9px] items-center">
        <span className="text-[clamp(20px,3vw,40px)] font-bold">CV</span>
        <Button
          classNames="bg-white20 px-[clamp(10px,2vw,10px)] py-[clamp(10px,2vw,16px)] rounded-[7px] text-[clamp(10px,1.3vw,20px)] w-full "
          label="Download PDF"
        />
      </TransparentWrapper>
      <SocialIcons
        socialLinks={socialLinks}
        classNames="mx-auto gap-[clamp(8px,1vw,30px)]"
      />
    </div>
  );
};
