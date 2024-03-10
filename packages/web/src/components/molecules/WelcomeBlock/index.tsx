import { ArrowIcon } from "../../atoms/ArrowIcon";
import { Button } from "../../atoms/Button";
import { useEmployeeAnimation } from "../../../hooks/useEmployeeAnimation";

export const WelcomeBlock = () => {
  const {
    gradientColor,
    isEmployee,
    shouldAnimate,
    textColor,
    setShouldAnimate,
  } = useEmployeeAnimation();

  return (
    <section className="text-white h-screen w-full grid py-[10vh] relative z-0">
      <div
        className={`transition-all absolute -translate-x-2/4 -translate-y-1/4 w-[100%] h-[100%] ${gradientColor} rounded-[50%] left-2/4 top-[-10%] blur-[175px] z-[-2]`}
      ></div>
      <img
        src="/images/Group-15.png"
        alt="large profile card"
        className="w-[clamp(123px,9vw,165px)] h-auto object-cover absolute top-[10%] left-[7%] 2xl:top-[2%] 2xl:left-[2%] xs1:hidden z-[-1]"
      />
      <img
        src="/images/Group-15.png"
        alt="large profile card"
        className="w-[clamp(123px,9vw,165px)] h-auto object-cover absolute bottom-[5%] left-[10%] xs:bottom-[-10%]  xs:left-[-5%] z-[-1]"
      />
      <img
        src="/images/Group-19.png"
        alt="small profile card"
        className="w-[clamp(69px,7vw,115px)] h-auto object-cover absolute top-[5%] left-[30%] xs:top-[5%] xs:left-[10%] z-[-1]"
      />
      <img
        src="/images/Group-15.png"
        alt="large profile card"
        className="w-[clamp(123px,9vw,165px)] h-auto object-cover absolute top-[4%] left-[57%]  z-[-1]"
      />
      <img
        src="/images/Group-19.png"
        alt="small profile card"
        className="w-[69px] h-auto object-cover absolute top-[10%] right-[15%] 2xl:top-[2%] 2xl:right-[6%] sm:hidden z-[-1]"
      />
      <img
        src="/images/Group-15.png"
        alt="large profile card"
        className="w-[clamp(123px,9vw,165px)] h-auto object-cover absolute bottom-[7%] right-[25%] sm:hidden z-[-1]"
      />
      <img
        src="/images/Group-15.png"
        alt="average profile card"
        className="w-[clamp(85px,10vw,125px)] h-auto object-cover absolute bottom-[35%] right-[10%] 2xl:bottom-[1%] 2xl:right-[3%] sm:bottom-[4%] sm:right-[2%] z-[-1]"
      />
      <div className="flex flex-col items-start gap-[clamp(20px,4vw,55px)] pl-[clamp(16px,8vw,410px)] self-end  z-1">
        <h1 className="font-extrabold text-[clamp(35px,6.5vw,120px)]">
          <span>Find your</span>
          <span className="block">
            best
            <span
              className={`${textColor} ${
                shouldAnimate ? "animate-text-focus-in" : ""
              }`}
              onAnimationEnd={() => setShouldAnimate(false)}
            >
              {isEmployee ? " employee" : " team"}
            </span>
          </span>
        </h1>
        <Button
          classNames="px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)] bg-white20"
          label="Lets find it"
          onClick={() => {}}
        />
      </div>
      <ArrowIcon className="mx-auto self-end animate-bounce" />
    </section>
  );
};
