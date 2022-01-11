import Board from "./Board";
function App() {
  return (
    <div className="App flex w-screen flex-col items-center bg-gray-700 min-h-screen">
      <div className=" mt-10 flex flex-col items-center">
        <h1 className="mb-9">
          <span className="text-orange-300 text-8xl"> lights_</span>
          <span className="text-8xl text-violet-300">_out</span>
        </h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
//
