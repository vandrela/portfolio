import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";

interface TransparentWrapperProps {
  children: ReactNode;
  additionalClasses?: string;
}

export const TransparentWrapper = forwardRef<
  HTMLDivElement,
  TransparentWrapperProps
>(({ children, additionalClasses }, ref) => {
  return (
    <div
      className={`bg-transparentWhite border border-solid border-white20 min-h-[100%] rounded-[18px] p-[clamp(28px,5vw,85px)] ${additionalClasses}`}
      ref={ref}
    >
      {children}
    </div>
  );
});

export const MTransparentWrapper = motion(TransparentWrapper);
