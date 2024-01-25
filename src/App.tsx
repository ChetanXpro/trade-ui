import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import PerpStats from "./components/PerpStats";
import Sidebar from "./components/Sidebar";
import Orderbook from "./components/OrderBook";
import TradeViewChart from "./components/TradeViewChart";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 ">
        <div className="   w-full    ">
          <PerpStats />
          <div className="flex   justify-between w-full    ">
            <div className="flex bg-filament-card-bg flex-col w-full ">
              <div className="flex-grow flex ">
                <div className="w-full flex h-full">
                  <TradeViewChart />
                </div>
                <div className="border border-[#FFFFFF0D] w-[25rem] h-full">
                  <Orderbook />
                </div>
              </div>
              <div className="border border-[#FFFFFF0D] py-1  flex gap-3 items-center">
                <div className=" h-full flex border border-x-0 pb-1 border-t-0  border-b-[#9c9191] items-center justify-center px-2">
                  <p className="text-[#FFFFFF] text-xs font-medium">Postions</p>
                </div>
                <div className=" h-full flex  items-center justify-center px-2">
                  <p className="text-[#BABABA] text-xs font-medium">
                    Open Order
                  </p>
                </div>
                <div className=" h-full flex  items-center justify-center px-2">
                  <p className="text-[#BABABA] text-xs font-medium">History</p>
                </div>
                <div className=" h-full flex  items-center justify-center px-2">
                  <p className="text-[#BABABA] text-xs font-medium">
                    Realised PnL
                  </p>
                </div>
                <div className=" h-full flex  items-center justify-center px-2">
                  <p className="text-[#BABABA] text-xs font-medium">Balance</p>
                </div>
              </div>
            </div>

            <div className=" h-full w-[356px] bg-filament-card-bg border border-[#25272A] border-r-0 border-b-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
