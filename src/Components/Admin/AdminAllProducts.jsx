import React from "react";
import { Row } from "react-bootstrap";
import AdminProductsCard from "./AdminProductsCard";

export default function AdminAllProducts({products}) {
  return (
    <div>
      <div className="admin-container-text">إدارة جميع المنتجات</div>
      <Row className="justify-content-center">
        {
          products?(
            products.map((item,index)=>
              <AdminProductsCard item={item} key={index}/>)
          ):null
        }
      </Row>
    </div>
  );
}
