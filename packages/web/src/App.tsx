// import { Routes, Route } from "react-router-dom";
// import { WelcomePage } from "./pages/WelcomePage";
// import { MainPage } from "./pages/MainPage";
// import { Header } from "./components/Header";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./counterSlice";
// import { RootState } from "./store";
import Layout from "./components/Layout";
import "typeface-montserrat";
import "./App.css";
import { OurValuesBlock } from "./components/molecules/OurValuesBlock";
import { WelcomeBlock } from "./components/molecules/WelcomeBlock";
import { HiringProcessBlock } from "./components/molecules/HiringProcessBlock";
import { ThankYou } from "./components/molecules/ThankYouAkaFooter";

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
      <HiringProcessBlock />
      <OurValuesBlock slides={slides} />
      <ThankYou/>
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
