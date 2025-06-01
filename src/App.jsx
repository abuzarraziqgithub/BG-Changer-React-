import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-end transition-all duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="bg-zinc-100 w-auto  flex justify-center h-auto mb-10 rounded-xl  ">
          <div className="flex justify-around w-full p-5 gap-3 flex-wrap   ">
            <button
              className="bg-red-700 sm:p-5 sm:h-16 rounded-xl w-20 outline-none hover:bg-red-600 transition-all duration-300 text-red-50"
              onClick={() => handleColorChange("red")}
            >
              Red
            </button>
            <button
              className="bg-green-700 p-5 h-16 rounded-xl w-20 outline-none hover:bg-green-600 transition-all duration-300 text-red-50"
              onClick={() => handleColorChange("green")}
            >
              Green
            </button>
            <button
              className="bg-blue-700 p-5 h-16 rounded-xl w-20 outline-none hover:bg-blue-600 transition-all duration-300 text-red-50"
              onClick={() => handleColorChange("blue")}
            >
              Blue
            </button>
            <button
              className="bg-yellow-500 p-5 h-16 rounded-xl w-20 outline-none hover:bg-yellow-600 transition-all duration-300 "
              onClick={() => handleColorChange("yellow")}
            >
              Yellow
            </button>
            <button
              className="bg-purple-500 p-5 h-16 rounded-xl w-20 outline-none hover:bg-purple-600 transition-all duration-300 text-red-50"
              onClick={() => handleColorChange("purple")}
            >
              Purple
            </button>
            <button
              className="bg-orange-500 p-5 h-16 rounded-xl w-20 outline-none flex justify-center hover:bg-orange-600 transition-all duration-300"
              onClick={() => handleColorChange("orange")}
            >
              Orange
            </button>
            <button
              className="bg-black p-5 h-16 rounded-xl w-20 text-sky-50 outline-none hover:bg-zinc-800 transition-all duration-300"
              onClick={() => handleColorChange("black")}
            >
              Black
            </button>
            <button
              className="bg-white p-5 h-16 rounded-xl w-20 outline-none border border-zinc-700 hover:bg-zinc-200 transition-all duration-300"
              onClick={() => handleColorChange("white")}
            >
              White
            </button>
            <button
              className="bg-pink-500 p-5 h-16 rounded-xl w-20 outline-none hover:bg-pink-600 transition-all duration-300"
              onClick={() => handleColorChange("pink")}
            >
              Pink
            </button>
            <button
              className="bg-gray-500 p-5 h-16 rounded-xl w-20 outline-none text-red-50 hover:bg-gray-600 transition-all duration-300"
              onClick={() => handleColorChange("gray")}
            >
              Gray
            </button>
            <button
              className="bg-amber-900 p-5 h-16 rounded-xl w-20 outline-none text-red-50 hover:bg-amber-950 transition-all duration-300 flex justify-center"
              onClick={() => handleColorChange("brown")}
            >
              Amber
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
