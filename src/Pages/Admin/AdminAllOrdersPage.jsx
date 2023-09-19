import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Pagination from "../../Components/Utility/Pagination";
import AdminSidePar from "../../Components/Admin/AdminSideBar";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";

export default function AdminAllOrdersPage() {
  return (
    <div className="font">
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSidePar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllOrders />
          <Pagination />
        </Col>
      </Row>
    </Container>
    </div>
  );
}
