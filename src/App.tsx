import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-10 flex flex-col">
      <div className="mx-auto w-fit flex items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react w-20 h-20"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-center text-xl font-bold">Vite + React</h1>
      <div className="flex flex-col items-center space-y-3">
        <button
          type="button"
          className="bg-blue-700 p-2 rounded-md text-white shadow-md"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <div>
          Edit <code>src/App.tsx</code> and save to test HMR
        </div>
      </div>
      <p className="text-center read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
