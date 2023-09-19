import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import AdminSidePar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Utility/Pagination";
import ViewProductAdminHook from "../../Hook/Admin/ViewProductAdminHook";

export default function AdminProductPage() {

const [item,pagination,onPress] = ViewProductAdminHook();
if(pagination){
  var pageCount = pagination;
}
else{
  pageCount =0;
}
  return (
    <div className="font">
    <div style={{ minHeight: "670px" }}>
      <Container className="py-3">
        <Row className="py-3">
          <Col sm="3" xs="2" md="2">
            <AdminSidePar />
          </Col>
          <Col sm="9" xs="10" md="10">
            <AdminAllProducts products={item}/>
            <Pagination PageCount={pageCount} onPress={onPress}/>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}
