import React from "react";
import NavbarLogin from "../../Components/Utility/NavbarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCat from "../../Components/Home/HomeCat";
import ProductCardContainer from "../../Components/Products/ProductCardContainer";
import DiscountSec from "../../Components/Home/DiscountSec";
import BrandCardContainer from "../../Components/Brand/BrandCardContainer";
import ViewHomeProductHook from "../../Hook/Products/ViewHomeProductHook";

export default function HomePage() {
  const [item] = ViewHomeProductHook()
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCat />
      <ProductCardContainer 
title="الأكثر مبيعا" btnTitle="المزيد" 
products={item}
pathText='/products' />
      <DiscountSec />
      <ProductCardContainer title="الأكثر تقييما"
btnTitle="المزيد"
products={item}
pathText="/products"/>
      <BrandCardContainer title="أشهر الماركات" 
btnTitle="المزيد" />

    </div>
  );
}
