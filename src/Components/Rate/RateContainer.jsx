import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../Utility/Pagination";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import { StarIcon } from "../Icons";
export default function RateContainer() {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
    <div>{StarIcon()}</div> 
          <div className="cat-rate d-inline mx-2 my-1" style={{fontSize:'20px'}}>4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
        </Col>
      </Row>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />

      <Pagination />
    </Container>
  );
}
