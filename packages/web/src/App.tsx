import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ProfilerPage } from "./pages/ProfilerPage";
import Layout from "./components/Layout";
import "typeface-montserrat";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profiler/:profilerId" element={<ProfilerPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
