import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductCardContainer from "../../Components/Products/ProductCardContainer";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../Hook/Products/ViewProductDetailsHook";

export default function ProductDetailsPage() {
 const {id} = useParams();
 const [item,imgs,cat,brand,prod]=ViewProductDetailsHook(id)
if(prod)
var items = prod.slice(0,4)
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails id={id} />
        <RateContainer/>
        <ProductCardContainer title="منتجات قد تعجبك" products={items}/>
      </Container>
    </div>
  );
}
