import React from 'react'
import { Col } from 'react-bootstrap'
export default function CategoryCard({background,img,title}) {
  return (
      <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className='my-4 d-flex'
      >
        <div className="allCard mb-3">
          <div className='category-card' style={{backgroundColor:`${background}`}}></div>{" "}
          <img src={img} alt="" className='category-card-img' srcset="" />
          <p className='category-card-text my-2'>{title}</p>
        </div>

      </Col>
  )
}
