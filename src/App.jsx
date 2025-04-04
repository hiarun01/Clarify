import "./App.css";
import Home from "./components/Home";
import {Image} from "lucide-react";

function App() {
  return (
    <div className="h-screen">
      {/* Header */}
      <header className="bg-red-600 text-center text-white py-3 text-lg font-bold flex justify-center items-center gap-2 shadow-md">
        <div>
          <Image />
        </div>
        <div>
          <span className="text-lg">AI Image Enhancer</span>
        </div>
      </header>
      {/* Home */}
      <Home />
      <footer className="bg-red-600 text-center text-white py-3 text-lg font-bold shadow-md">
        build by : hiarun01
      </footer>
    </div>
  );
}

export default App;
