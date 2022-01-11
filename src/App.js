import Board from "./Board";
function App() {
  return (
    <div className="App flex w-screen flex-col items-center bg-gray-700 min-h-screen">
      <div className=" mt-10 flex flex-col items-center">
        <h1 className="mb-9">
          <span className="text-orange-600 text-6xl"> lights </span>
          <span className="text-6xl text-violet-600">out </span>
        </h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
//
