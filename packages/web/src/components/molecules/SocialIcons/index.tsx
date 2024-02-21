import { getIconComponent } from "../../../utils/iconHelper";
import { SocialIcon } from "../../atoms/SocialIcon";

export interface SocialLink {
  link: string;
  icon: string;
}

interface SocialIconsProps {
  socialLinks: SocialLink[];
  classNames?: string;
}

export const SocialIcons = ({ socialLinks, classNames }: SocialIconsProps) => {
  return (
    <nav className={`flex gap-[clamp(10px,2vw,24px)] ${classNames}`}>
      {socialLinks.map((social) => {
        const IconComponent = getIconComponent(social.icon);
        if (!IconComponent) return null;
        return (
          <SocialIcon
            key={social.link}
            icon={IconComponent}
            link={social.link}
          />
        );
      })}
    </nav>
  );
};
