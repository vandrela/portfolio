export interface SocialIconProps {
  link: string;
  icon: React.ElementType;
}

export const SocialIcon = ({ link, icon: Icon }: SocialIconProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Icon
      style={{
        height: "clamp(40px,5vw,64px)",
        width: "clamp(40px,5vw,64px)",
        border: "1px solid white",
        padding: "clamp(3px,0.5vw,6px)",
        borderRadius: "clamp(6px,1vw,10px)",
      }}
    />
  </a>
);
