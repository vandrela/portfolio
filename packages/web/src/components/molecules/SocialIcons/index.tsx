import { getIconComponent } from "../../../utils/iconHelper";
import { SocialIcon } from "../../atoms/SocialIcon";

interface SocialIconsProps {
  socialLinks: { link: string; icon: string }[];
}

export const SocialIcons = ({ socialLinks }: SocialIconsProps) => {
  return (
    <nav className="flex gap-[clamp(10px,2vw,24px)]">
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
