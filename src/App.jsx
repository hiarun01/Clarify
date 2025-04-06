import "./App.css";
import Home from "./components/Home";
import {Image} from "lucide-react";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-center text-white py-3 text-lg font-bold flex justify-center items-center gap-2 shadow-md">
        <div>
          <Image />
        </div>
        <div>
          <span className="text-lg font-semibold">AI Image Enhancer</span>
        </div>
      </header>
      {/* Home */}
      <Home />
      <footer className="bg-red-600 text-center text-white py-3 text-sm font-bold shadow-md">
        by : @hiarun01
      </footer>
    </div>
  );
}

export default App;
