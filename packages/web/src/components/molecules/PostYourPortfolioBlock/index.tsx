import { TransparentWrapper } from "../../atoms/TransparentWrapper/index";
import { Form } from "../Form";

export const PostYourPortfolioBlock = () => {
  return (
    <section
      className="px-[clamp(15px,7vw,60px)] pt-[clamp(80px,15vw,323px)] relative"
      id="Post your portfolio"
    >
      <div className="flex max-w-[1390px] mx-auto gap-[clamp(20px,4vw,60px)] 2xl:block z-10">
        <div className="flex flex-col justify-center gap-[clamp(20px,3vw,57px)] w-1/2 2xl:w-full">
          <h2 className="text-white text-[clamp(40px,7vw,92px)] font-semibold leading-[1.3] 2xl:font-bold">
            Post your portfolio
          </h2>
          <p className="text-white text-[clamp(20px,3vw,40px)] font-normal leading-[1.3]  2xl:mb-10">
            You can also become a part of this site, post your portfolio and use
            it to find your client
          </p>
        </div>
        <div className="w-1/2 2xl:w-3/4  2xl:mx-auto xs1:w-full">
          <TransparentWrapper>
            <h3 className="text-white text-[clamp(20px,3vw,40px)] font-medium mb-[clamp(20px,4vw,60px)]">
              Your details
            </h3>
            <Form />
          </TransparentWrapper>
        </div>
      </div>
    </section>
  );
};
