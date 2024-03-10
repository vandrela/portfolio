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
];

export const MainPage = () => {
  const supabaseUrl = "https://qublhqlpkevwavzgwovl.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YmxocWxwa2V2d2F2emd3b3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5NjM1MDIsImV4cCI6MjAyMjUzOTUwMn0.E9RUdMBbo6kISlmOTJbLBeDsvkTjPJsb1OG0TyK1qLg";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [profilers, setProfilers] = useState<ProfileItemProps[]>([]);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
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
    <main>
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

      <WelcomeBlock />
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
    </main>
  );
};
