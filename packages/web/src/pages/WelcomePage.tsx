export const WelcomePage = () => {
  return (
    <div>
      <button
        className="px-6 py-4 bg-red-700 text-white text-bold"
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
};
