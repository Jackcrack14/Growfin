import React from "react";
import Navbar from "./Navbar";
import "../assets/header.css";
import HeaderBody from "./HeaderBody";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <HeaderBody />
    </div>
  );
}
