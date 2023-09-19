import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { StarIcon } from '../Icons';
export default function RateItem() {
  return (
    <div>
    <Row className="mt-3">
        <Col className="d-felx me-5">
            <div className="rate-name  d-inline ms-2">احمد محمود</div>
      {StarIcon()}
<div className="cat-rate  d-inline mx-2 py-4" style={{fontSize:'20px'}}>4.3</div>
        </Col>
    </Row>
    <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
            <div className="rate-description  d-inline ms-2">
                منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
            </div>
        </Col>
    </Row>
</div>
  )
}
