import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminOrderDetails from "../../Components/Admin/AdminOrderDetails";
import AdminSidePar from "../../Components/Admin/AdminSideBar";

export default function AdminOrderDetailsPage() {
  return (
    <div className="font">
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSidePar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
    </div>
  );
}
