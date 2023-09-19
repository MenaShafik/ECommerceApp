import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Subtitle from "../Utility/Subtitle";
import CategoryCard from "../Category/CategoryCard";
import HomeCategortyHook from "../../Hook/Category/HomeCategortyHook";

export default function HomeCat(data) {

  const [category,loading, colors] =HomeCategortyHook();

  return (
    <Container>
      <Subtitle title="التصنيفات" btnTitle="المزيد" pathText="allCategory" />
      <Row className="my-2 d-flex justify-content-between">
        {
        loading===false? (
        category.data ? (
          category.data.slice(0,5).map((item, index) => {
            return (
              <CategoryCard
                title={item.name}
                background={colors[index]}
                
                img={item.image}
              />
            );
          })
        ) : 
          <h2>لا يوجد تصنيفات</h2>
        ) : (
          <h2>
            جاري التحميل
<Spinner animation="border" variant="info" className="mx-4"/>
          </h2>
        )
      }
      </Row>
    </Container>
  );
}
