import "./App.css";

function App() {
  return (
    <div className="App">
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
      {/* tailwind */}
      <h1 className="text-3xl font-bold underline text-my-red">Hello world!</h1>
    </div>
  );
}

export default App;
