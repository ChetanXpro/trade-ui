import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TokenDetails from "./page/TokenDetails";
import Footer from "./components/Footer";
import PerpStats from "./components/PerpStats";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="flex h-full">
          <div className="w-[6rem] bg-filament-card-bg border border-[#25272A] border-r-0 border-b-0"></div>

          <div className="flex flex-col w-full">
            <div>dd</div>
            <div className="w-full flex-1 bg-green-200">
              <div className="w-full h-full">TradeChart</div>
              <div className="bg-white w-[25rem] h-full">Orderbook</div>
            </div>
            <div>Other details</div>
          </div>

          <div className="w-[356px] bg-filament-card-bg border border-[#25272A] border-r-0 border-b-0">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
