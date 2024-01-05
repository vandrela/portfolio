import { ReactNode } from "react";
import { TitleBlock } from "../atoms/TitleBlock";
import { HireBrick } from "../atoms/BrickHire";

interface DearGuestProps {
  title: string;
  text: string;
  children?: ReactNode;
}

const DearGuest = ({ title, text, children }: DearGuestProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-16 px-32 py-32">
      <div className="w-1/2">
        <TitleBlock classNames="mb-8" name={title} />
        <p className="mb-8 text-white text-[clamp(12px,2vw,28px)] font-normal">
          {text}
        </p>
        <p className="mb-8 text-white text-[clamp(12px,2vw,28px)] font-bold">
          Cheers!
        </p>
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <HireBrick
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjv8k9FpJH5AvquxbVyd06B5UludsXYeHuTLTGllucw&s"
          }
          name={"Illia Markulchak"}
          role={"Front end developer"}
          buttonLabel={"Hire"}
        />
        <HireBrick
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjv8k9FpJH5AvquxbVyd06B5UludsXYeHuTLTGllucw&s"
          }
          name={"Dmytro Ovchar"}
          role={"Front end developer"}
          buttonLabel={"Hire"}
        />
        <HireBrick
          image={
            "https://media.licdn.com/dms/image/C4E03AQEISBW-5XZSJg/profile-displayphoto-shrink_200_200/0/1516950667282?e=2147483647&v=beta&t=jY1K22GqJ0EzlcGeJgKy4O6XN10GzQGVfnswY2x4X8E"
          }
          name={"Pavlo Bodjo"}
          role={"Front end developer"}
          buttonLabel={"Hire"}
        />
        {/* {children} */}
      </div>
    </div>
  );
};

export default DearGuest;
