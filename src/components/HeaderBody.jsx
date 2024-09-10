import { Button, Col, Row } from "antd";
import React from "react";
import "../assets/header.css";
export default function HeaderBody() {
  return (
    <div>
      <Row span={24}>
        <Col span={12}>
          <h1 className="header-headings">Real-Time</h1>
          <h1 className="header-headings">Cash Application</h1>
          <h1 className="header-headings">Software</h1>
          <div className="header-para-container">
            Radically minimize manual intervention and achieve same-day closure
            with Growfin’s ML-powered Cash Application that delivers accurate,
            touchless posting.
          </div>
          <div className="header-button-container">
            <Button className="demo-button">Schedule a Demo</Button>
            <Button className="request-button">Request Access</Button>
          </div>
        </Col>
        <Col span={12}>
          <div className="image-container">
            <img src="src\assets\header-dashboard.png" alt="Dashboard" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
