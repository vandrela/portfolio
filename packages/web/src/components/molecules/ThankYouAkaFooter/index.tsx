import { Button } from "../../atoms/Button";
import { TitleBlock } from '../../atoms/TitleBlock';

function scrollTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

const violetColor =
  "bg-[radial-gradient(ellipse,rgba(79,0,107,1)_50%,transparent_70%)]";

export const ThankYou = () => {
  return (
    <div className="mx-auto">
      <TitleBlock name="Thank you for watching" classNames="text-center mb-[clamp(40px,5vw,80px)]" />
      <Button
        onClick={() => scrollTopFunction()}
        classNames="px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)] text-white"
        label="Go up"
      />
    </div>
  );
};