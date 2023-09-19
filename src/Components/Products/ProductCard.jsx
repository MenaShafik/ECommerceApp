import React from 'react'
import { Card, Col } from 'react-bootstrap'
import prod1 from "../../images/prod1.png";

import { Link } from 'react-router-dom';
import { HeartIcon, StarIcon } from '../Icons';
export default function ProductCard({item}) {

  return (
<>
<Col xs="6" sm="6" md="4" lg="3" className="d-flex">

<Card
    className="my-2"
    style={{
        width: "100%",
        height: "345px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
    }}>
    <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
        <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
    </Link>
    <div className="d-flex justify-content-end mx-2">

{HeartIcon()}
    </div>
    <Card.Body>
        <Card.Title>
            <div className="card-title">
{item.title}
            </div>
        </Card.Title>
        <Card.Text>
            <div className="d-flex justify-content-between ">
                <div className="d-flex">
          {StarIcon()}
                    <div className="card-rate mx-2" style={{fontSize:'18px'}}>{item.ratingsQuantity}</div>
                </div>
                <div className="d-flex">
                    <div className="card-price">{item.price}</div>
                    <div className="card-currency mx-1">جنيه</div>
                </div>
            </div>
        </Card.Text>
    </Card.Body>
</Card>
</Col>
</>
  )
}
