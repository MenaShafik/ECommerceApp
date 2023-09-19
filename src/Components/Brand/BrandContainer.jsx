import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import brand_1 from '../../images/brand1.png';
import brand_2 from '../../images/brand2.png';
import brand_3 from '../../images/brand3.png';
import brand_4 from '../../images/brand1.png';
import AllBrandPageHook from '../../Hook/Brand/AllBrandPageHook';

export default function BrandContainer(data) {
  return (
    
    <Container>
        <div className="admin-content-text mt-2">كل الماركات</div>
      <Row className="my-4 d-flex justify-content-between">
        
<BrandCard img={brand_1}/>
{
        loading===false? (
        data ? (
          data.map((item, index) => {
            return (
              <BrandCard
        
                key={index}
                img={item.image}/>);
          })
        ) : 
          <h2>لا يوجد تصنيفات</h2>
        ) : (
          <h2>
<Spinner animation="border" variant="info" className="mx-4"/>
          </h2>
        )
      }

      </Row>
    </Container>
  )
}
