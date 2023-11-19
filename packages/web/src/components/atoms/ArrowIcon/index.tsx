import { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  color?: string;
}
export const ArrowIcon = ({
  width = "36",
  height = "36",
  color = "white",
  className = "",
  ...rest
}: ArrowIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    className={className}
    {...rest}
  >
    <g opacity="0.5" clipPath="url(#clip0_116_1695)">
      <path
        d="M18.0001 34.8L17.1505 35.6496C17.2619 35.7613 17.3944 35.85 17.5401 35.9105C17.6859 35.971 17.8422 36.0021 18.0001 36.0021C18.1579 36.0021 18.3142 35.971 18.46 35.9105C18.6058 35.85 18.7382 35.7613 18.8497 35.6496L18.0001 34.8ZM18.8497 35.6496L26.0497 28.4496L24.3505 26.7504L17.1505 33.9504L18.8497 35.6496ZM18.8497 33.9504L11.6497 26.7504L9.95046 28.4496L17.1505 35.6496L18.8497 33.9504ZM16.8001 0V34.8H19.2001V0H16.8001Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_116_1695">
        <rect width="36" height="36" fill={color} />
      </clipPath>
    </defs>
  </svg>
);

