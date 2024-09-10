import { Button } from "antd";
import React from "react";
import "../assets/navbar.css";

export default function () {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="src\assets\logo.png" alt="growfin logo" />
      </div>
      <div className="navbar-button-container">
        <Button className="demo-button">Schedule a Demo</Button>
        <Button className="request-button">Request Access</Button>
      </div>
    </div>
  );
}
