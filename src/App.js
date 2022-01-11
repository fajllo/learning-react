import Board from "./Board";
function App() {
  return (
    <div className="App flex w-screen flex-col items-center bg-gray-700 min-h-screen">
      <div className=" mt-10 flex flex-col items-center">
        <Board key={1} />
      </div>
    </div>
  );
}

export default App;
//
