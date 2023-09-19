import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FacebookIcon, InstagremIcon, PhoneIcon, TwitterIcon } from "../Icons";
export default function Footer() {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shroot ">الشروط والاحكام</div>
            <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
            <div className="footer-shroot mx-2">اتصل بنا</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <div className="d-flex pt-3 mx-2">
        {PhoneIcon()}
              <p className="footer-phone">01141266437</p>
            </div>
            <div style={{ cursor: "pointer" }}>
{FacebookIcon()}
            </div>
            <div style={{ cursor: "pointer" }} className="">
{InstagremIcon()}
            </div>
            <div style={{ cursor: "pointer" }} className="">
    {TwitterIcon()}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
