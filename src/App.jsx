import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-end"
        style={{ backgroundColor: color }}
      >
        <div className="bg-neutral-50 sm:w-2/4 flex justify-center sm:h-24 mb-10 rounded-xl ">
          <div className="flex sm:justify-around sm:w-full p-5 flex-wrap">
            <button
              className="bg-red-700 sm:p-5 sm:h-16 rounded-xl w-20 outline-none"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="bg-green-700 p-5 h-16 rounded-xl w-20 outline-none"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="bg-blue-700 p-5 h-16 rounded-xl w-20 outline-none"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="bg-yellow-500 p-5 h-16 rounded-xl w-20 outline-none"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
