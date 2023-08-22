import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter);

  return (
    <div className="App">
      <header className="App-header">
        {/* NEW */}
        <button
          onClick={() => {
            fetch("http://localhost:3001", {})
              .then((response) => response.json())
              .then((data) => console.log(data));
          }}
        >
          GET SOME DATA!!!
        </button>
        
        <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
      </header>
    </div>
  );
}

export default App;
