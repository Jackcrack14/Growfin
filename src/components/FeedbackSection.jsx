import React from "react";
import "../assets/feedback.css";
import { Col, Row } from "antd";
export default function FeedbackSection() {
  return (
    <div className="feedback-container">
      <div className="feedback-heading">
        <h1>What our Early Customers</h1>
        <h1>have Already Achieved</h1>
      </div>
      <Row span={24}>
        <Col>
          <img src="src\assets\hr-image.png" alt="human" />
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
