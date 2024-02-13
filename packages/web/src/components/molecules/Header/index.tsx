import React from "react";
import { Button } from "../../atoms/Button";
import { SocialIcons, SocialLink } from "../SocialIcons";

interface HeaderProps {
  socialLinks: SocialLink[];
}

export const Header = ({ socialLinks }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between text-white h-[clamp(100px,10vw,150px)] mb-[clamp(30px,5vw,80px)] max-w-[1700px] mx-auto">
      <Button
        classNames="p-5 bg-white20 px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)]"
        label="Download CV"
      />
      <SocialIcons socialLinks={socialLinks} />
    </header>
  );
};
