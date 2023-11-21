import { ReactNode } from "react";
import { TitleBlock } from "../TitleBlock";

interface DearGuestProps {
  title: string;
  text: string;
  children?: ReactNode;
}

const DearGuest = ({ title, text, children }: DearGuestProps) => {
  return (
    <div className="w-full flex flex-column">
      <div className="w-1/2">
        <TitleBlock classNames="mb-0" name={title} />
        <p className="text-white">{text}</p>
      </div>
      <div className="w-1/2">
        <span className="text-white">hello world</span>
        {children}
      </div>
    </div>
  );
};

export default DearGuest;
