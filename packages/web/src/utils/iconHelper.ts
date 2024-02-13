import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiRedditFill,
  RiTwitterXFill,
} from "react-icons/ri";

// You can add more social networks here
export const getIconComponent = (iconName: string) => {
  const lowercaseIconName = iconName.toLowerCase();
  switch (lowercaseIconName) {
    case "linkedin":
      return RiLinkedinFill;
    case "github":
      return RiGithubFill;
    case "facebook":
      return RiFacebookFill;
    case "instagram":
      return RiInstagramFill;
    case "youtube":
      return RiYoutubeFill;
    case "reddit":
      return RiRedditFill;
    case "twitter":
      return RiTwitterXFill;
    default:
      return null;
  }
};
