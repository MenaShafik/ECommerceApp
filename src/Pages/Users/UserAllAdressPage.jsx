import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import UserSideBar from "../../Components/Users/UserSideBar";

import UserAddAdress from "../../Components/Users/UserAddAdress";
import UserAddressCard from "../../Components/Users/UserAddressCard";

export default function UserAllAdressPage() {
  return (
    <div className="font">
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <UserAddressCard/>
          <UserAddAdress />
        </Col>
      </Row>
    </Container>
    </div>
  );
}
