import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import CategoryCard from "./CategoryCard";

export default function CategoryContainer({ data, loading }) {
  const colors = ["#09c", "gold", "green", "red", "gray", "blue"];

  return (
    <Container>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  title={item.name}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
                  key={index}
                  img={item.image}
                />
              );
            })
          ) : (
            <h2>لا يوجد تصنيفات</h2>
          )
        ) : (
          <h2>
            <Spinner animation="border" variant="info" className="mx-4" />
          </h2>
        )}
      </Row>
    </Container>
  );
}
