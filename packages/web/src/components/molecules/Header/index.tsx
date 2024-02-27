import { useState } from "react";
import { Button } from "../../atoms/Button";
import { SocialIcons, SocialLink } from "../SocialIcons";
import { MenuButton } from "../BurgerMenu";
import { useMediaQuery } from "@react-hook/media-query";
import { Chevron } from "../../atoms/Chevron/Chevron";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  socialLinks: SocialLink[];
}

export const Header = ({ socialLinks }: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  return (
    <header
      className={`flex items-center justify-between text-white h-[clamp(100px,10vw,150px)] mb-[clamp(10px,5vw,80px)] px-[clamp(25px,6vw,100px)] max-w-[1700px] mx-auto ${
        isSmallScreen && "justify-between sticky top-0 bg-transparentBlack41"
      } relative z-50`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`w-14 h-14 border-2 border-transparent justify-center rounded-full flex items-center sm:justify-start hover:scale-110 transition-all sm:hover:bg-transparent hover:bg-white20 left-[8px] ${
          isSmallScreen ? "static" : "fixed"
        }`}
      >
        <Chevron className="w-5 h-5 text-white" />
      </button>
      {!isSmallScreen ? (
        <>
          <Button
            classNames="p-5 ml-4 bg-white20 px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)]"
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
