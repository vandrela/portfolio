import { Button } from "../../atoms/Button";
import { SocialIcons, SocialLink } from "../SocialIcons";
import { MenuButton } from "../BurgerMenu";
import { useMediaQuery } from "@react-hook/media-query";
import { Chevron } from "../../atoms/Chevron/Chevron";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  socialLinks?: SocialLink[];
  isOpen: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  firstPage?: boolean;
}

export const Header = ({
  socialLinks,
  isOpen,
  setOpen,
  firstPage = false,
}: HeaderProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  return (
    <header
      className={`flex items-center ${
        firstPage
          ? `justify-end fixed w-full ${!isOpen && "bg-black/20"}`
          : "justify-between relative mb-[clamp(10px,5vw,80px)]"
      } text-white py-[clamp(10px,2vw,20px)] px-[clamp(25px,6vw,100px)] max-w-[1700px] mx-auto ${
        isSmallScreen &&
        !firstPage &&
        `flex ${isOpen ? "sticky" : " bg-black/20"} top-0  sticky `
      }  z-[51] rounded-b-md`}
    >
      {!firstPage && (
        <button
          onClick={() => navigate(-1)}
          className={`w-14 h-14 border-2 border-transparent justify-center rounded-full flex items-center sm:justify-start hover:scale-110 transition-all sm:hover:bg-transparent hover:bg-white20 left-[8px] ${
            isSmallScreen ? "static" : "fixed"
          }`}
        >
          <Chevron className="w-5 h-5 text-white" />
        </button>
      )}
      {!isSmallScreen ? (
        <>
          <Button
            classNames="p-5 ml-4 bg-white20 px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)]"
            label="Download CV"
            onClick={() => {}}
          />
          {socialLinks && <SocialIcons socialLinks={socialLinks} />}
        </>
      ) : (
        <MenuButton
          isOpen={isOpen}
          onClick={() => setOpen((prevState) => !prevState)}
          strokeWidth="2"
          color="#b9b9b9"
          transition={{ ease: "easeOut", duration: 0.2 }}
          width="clamp(30px,8vw,40px)"
          height="clamp(30px,8vw,40px)"
        />
      )}
    </header>
  );
};
