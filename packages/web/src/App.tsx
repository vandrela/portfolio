// import { Routes, Route } from "react-router-dom";
// import { WelcomePage } from "./pages/WelcomePage";
// import { MainPage } from "./pages/MainPage";
// import { Header } from "./components/Header";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./counterSlice";
// import { RootState } from "./store";
import Layout from "./components/Layout";
import { OurValuesBlock } from "./components/molecules/OurValuesBlock";
import { WelcomeBlock } from "./components/molecules/WelcomeBlock";
import { HiringProcessBlock } from "./components/molecules/HiringProcessBlock";
import DearGuest from "./components/DearGuest";
import "typeface-montserrat";
import "./App.css";
import { OurProfilers } from "./components/molecules/OurProfilers";
import { PostYourPortfolioBlock } from "./components/molecules/PostYourPortfolioBlock";

const profileData = [
  {
    id: 1,
    name: "James Smith",
    image: "/images/profile_image.png",
    position: "Backend developer",
  },
  {
    id: 2,
    name: "Tobias Williams",
    image: "/images/profile_image1.png",
    position: "Frontend developer",
  },
  {
    id: 3,
    name: "Michael Davis",
    image: "/images/profile_image2.png",
    position: "Frontend developer",
  },
  {
    id: 4,
    name: "Michael Jackson",
    image: "/images/profile_image3.png",
    position: "Full Stack developer",
  },
];

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

interface NavigationLink {
  to: string;
  text: string;
}

const navigationLinks: NavigationLink[] = [
  { to: "/", text: "Welcome page" },
  { to: "/bios", text: "Main page" },
  { to: "/contactus", text: "Contact Us" },
];

function App() {
  // const dispatch = useDispatch();
  // const count = useSelector((state: RootState) => state.counter);

  return (
    <Layout>
      {/* <Header navigationLinks={navigationLinks} /> */}
      {/* <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/bios" element={<MainPage />} />
        <Route path="/contactus" element={<p>Contact Us page</p>} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes> */}
      <WelcomeBlock />

      <DearGuest
        title="Dear guest!"
        text="Dear guest We're thrilled to invite you to our impressive project, Portfolio Profiler, created by our passionate small team. 
        We utilized React with TypeScript and Tailwind to craft professional designs and incorporate useful features for everyone.
        Cheers!"
      />
      <OurProfilers profileData={profileData} />
      <HiringProcessBlock />
      <OurValuesBlock slides={slides} />
      <PostYourPortfolioBlock />
      {/* 
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
        </header>
      </div> */}
    </Layout>
  );
}

export default App;
