import { useState } from "react";
import { Button } from "../../atoms/Button";
import { SocialIcons, SocialLink } from "../SocialIcons";
import { MenuButton } from "../BurgerMenu";
import { useMediaQuery } from "@react-hook/media-query";

interface HeaderProps {
  socialLinks: SocialLink[];
}

export const Header = ({ socialLinks }: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <header className="flex items-center justify-between text-white h-[clamp(100px,10vw,150px)] mb-[clamp(30px,5vw,80px)] max-w-[1700px] mx-auto sm:justify-end">
      {!isSmallScreen ? (
        <>
          <Button
            classNames="p-5 bg-white20 px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)]"
            label="Download CV"
          />
          <SocialIcons socialLinks={socialLinks} />
        </>
      ) : (
        <MenuButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          strokeWidth="3"
          color="#b9b9b9"
          transition={{ ease: "easeOut", duration: 0.2 }}
          width="40"
          height="40"
          // style={menuButtonStyle}
        />
      )}
    </header>
  );
};
