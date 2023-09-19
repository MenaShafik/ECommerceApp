import React from "react";
import AdminSidePar from "../../Components/Admin/AdminSideBar";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";

export default function AdminAddBrandPage() {
  return (
    <div className='font'>
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSidePar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAddBrand />
        </Col>
      </Row>
    </Container>
    </div>
  );
}
