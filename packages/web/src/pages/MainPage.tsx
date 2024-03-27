import { WelcomeBlock } from "../components/molecules/WelcomeBlock";
import { OurProfilers } from "../components/molecules/OurProfilers";
import { HiringProcessBlock } from "../components/molecules/HiringProcessBlock";
import { OurValuesBlock } from "../components/molecules/OurValuesBlock";
import { PostYourPortfolioBlock } from "../components/molecules/PostYourPortfolioBlock";
import { ThankYou } from "../components/molecules/ThankYouAkaFooter";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { ProfileItemProps } from "../components/molecules/ProfilerItem";
import { DearGuest } from "../components/DearGuest";
import { Header } from "../components/molecules/Header";
import { useMediaQuery } from "@react-hook/media-query";
import { Navigation } from "../components/molecules/Navigation";
import { createPortal } from "react-dom";

const slides = [
  {
    title: "Speed",
    text: "We get things done and have a bias towards action. We run a marathon and not a sprint. Though it's still a race.",
  },
  {
    title: "Speed",
    text: "We get things done and have a bias towards action.",
  },
  {
    title: "Speed",
    text: "We get things done and have a bias towards action. We run a marathon and not a sprint. Though it's still a race.",
  },
  {
    title: "Speed",
    text: "We get things done and have a bias towards action. We run a marathon and not a sprint. Though it's still a race.",
  },
  {
    title: "Speed",
    text: "We get things done and have a bias towards action. We run a marathon and not a sprint. Though it's still a race.",
  },
  {
    title: "Speed",
    text: "We get things done and have a bias towards action. We run a marathon and not a sprint. Though it's still a race.",
  },
];

const images = [
  {
    id: 1,
    path: "/images/Group-15.png",
    position: { top: "7%", left: "3%" },
    speed: 0.1,
    scale: 1,
    opacity: 1,
  },
  {
    id: 2,
    path: "/images/Group-15.png",
    position: { top: "-2%", left: "25%" },
    speed: 0.029,
    scale: 0.6,
    opacity: 0.6,
  },
  {
    id: 3,
    path: "/images/Group-15.png",
    position: { top: "45%", left: "85%" },
    speed: 0.115,
    scale: 0.7,
    opacity: 0.8,
  },
  {
    id: 4,
    path: "/images/Group-15.png",
    position: { top: "60%", left: "70%" },
    speed: 0.07,
    scale: 1,
    opacity: 1,
  },
  {
    id: 5,
    path: "/images/Group-15.png",
    position: { top: "3%", left: "60%" },
    speed: 0.035,
    scale: 1,
    opacity: 1,
  },
  {
    id: 6,
    path: "/images/Group-15.png",
    position: { top: "4%", left: "80%" },
    speed: 0.03,
    scale: 0.6,
    opacity: 0.5,
  },
  {
    id: 7,
    path: "/images/Group-15.png",
    position: { top: "68%", left: "8%" },
    speed: 0.125,
    scale: 1,
    opacity: 1,
  },
];

export const MainPage = () => {
  const supabaseUrl = "https://qublhqlpkevwavzgwovl.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YmxocWxwa2V2d2F2emd3b3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5NjM1MDIsImV4cCI6MjAyMjUzOTUwMn0.E9RUdMBbo6kISlmOTJbLBeDsvkTjPJsb1OG0TyK1qLg";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [profilers, setProfilers] = useState<ProfileItemProps[]>([]);
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const [isOpen, setOpen] = useState(false);

  const navigationElement = document.getElementById("navigation");

  useEffect(() => {
    getProfilers();
  }, []);

  async function getProfilers() {
    const { data } = await supabase.from("OurProfilers").select();
    setProfilers(data as ProfileItemProps[]);
  }

  return (
    <>
      {isSmallScreen && <Header isOpen={isOpen} setOpen={setOpen} firstPage />}
      {navigationElement &&
        createPortal(
          <>
            {isOpen && isSmallScreen && (
              <Navigation
                isSmallScreen
                setOpen={setOpen}
                navigationItems={[
                  { label: "Our profilers" },
                  { label: "Hiring process" },
                  { label: "Our values" },
                  { label: "Post your portfolio" },
                ]}
              />
            )}
          </>,
          navigationElement
        )}
      <WelcomeBlock images={images} />
      <DearGuest
        title="Dear guest!"
        text="Dear guest We're thrilled to invite you to our impressive project, Portfolio Profiler, created by our passionate small team. 
        We utilized React with TypeScript and Tailwind to craft professional designs and incorporate useful features for everyone.
        Cheers!"
      />
      <OurProfilers profileData={profilers} />
      <HiringProcessBlock />
      <OurValuesBlock slides={slides} />

      <PostYourPortfolioBlock />
      <ThankYou />
    </>
  );
};
