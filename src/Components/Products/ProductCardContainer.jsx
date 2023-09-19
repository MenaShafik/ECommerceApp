import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Subtitle from "../Utility/Subtitle";

export default function ProductCardContainer({ title, btnTitle,pathText,products}) {
  return (
    <Container>
      {
products?(<Subtitle title={title} btnTitle={btnTitle} pathText={pathText}/>):null
      }
      <Row className="my-2 d-flex justify-content-between">
      {
        products?(
          products.map((item ,index)=> <ProductCard key={index} item={item}/>)
        ):null
      }

      </Row>
    </Container>
  );
}
