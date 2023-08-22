import "./App.css";
import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header";

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
  return (
    <>
      <Header navigationLinks={navigationLinks} />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/bios" element={<MainPage />} />
        <Route path="/contactus" element={<p>Contact Us page</p>} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
