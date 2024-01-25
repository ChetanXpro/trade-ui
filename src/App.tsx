import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TokenDetails from "./page/TokenDetails";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex relative bg-green-200  flex-col justify-between ">
      <Navbar />
      {/* <div className=" flex-1 "> */}
      <TokenDetails />
      {/* </div> */}

      <Footer />
    </div>
  );
}

export default App;
