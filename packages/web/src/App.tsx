import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { RootState } from "./store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDataForm from "./components/DataForm";

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
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
    toast.success("Увеличено!");
  };

  const handleDecrement = () => {
    dispatch(decrement());
    toast.error("Уменьшено!");
  };

  return (
    <>
      <Header navigationLinks={navigationLinks} />
      <ToastContainer />
      <Routes>{/* ... */}</Routes>

      <div className="App">
        <header className="App-header">
          <div>
            <UserDataForm /> {/* Используйте компонент UserDataForm */}
          </div>
          <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
