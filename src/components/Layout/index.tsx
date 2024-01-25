import React from "react";
// import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Pass the child props
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
