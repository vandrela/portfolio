import  { ReactNode } from "react";
import { TitleBlock } from "../../atoms/TitleBlock";

interface FlexContainerProps {
  title?: string;
  children: ReactNode;
}

export const FlexContainer = ({ title = "", children }: FlexContainerProps) => {
  return (
    <section className="mb-[80px] relative" id={title}>
      <TitleBlock name={title} classNames="mb-[36px]" />
      <div className="flex flex-col gap-10">{children}</div>
    </section>
  );
};
