import { useParams } from "react-router-dom";
import { ThankYou } from "../components/molecules/ThankYouAkaFooter";

export const ProfilerPage = () => {
  let { profilerId } = useParams();

  console.log(profilerId, "params");
  return (
    <>
      <section className="h-screen">
        {/* Pavlo's Header here ----> */}
        <header className="bg-green text-white h-[100px]">Header</header>
        {/* <---- Pavlo's Header here*/}
        {/* All other components ----> */}
        <main className="bg-blue text-white">Main</main>
        {/* <---- All other components */}
        <ThankYou />
      </section>
    </>
  );
};
