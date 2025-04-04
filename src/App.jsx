import "./App.css";
import Home from "./components/Home";
import {Image} from "lucide-react";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="bg-red-600 text-center text-white py-3 text-lg font-bold flex justify-center items-center gap-2">
        <div>
          <Image />
        </div>
        <div>
          <span className="text-lg">AI Image Enhancer</span>
        </div>
      </header>
      {/* Home */}
      <Home />
      <footer>build bg : hiarun01</footer>
    </div>
  );
}

export default App;
