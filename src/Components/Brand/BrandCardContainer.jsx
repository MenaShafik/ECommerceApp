import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import Subtitle from '../Utility/Subtitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../Hook/Brand/HomeBrandHook';

export default function BrandCardContainer({title,btnTitle}) {
  const [brand,loading] =HomeBrandHook();
  return (
    <Container>
            <Subtitle title={title} btnTitle={btnTitle} pathText="allbrands" />
      <Row className="my-2 d-flex justify-content-between">
            {
        loading===false? (
        brand.data ? (
          brand.data.slice(0,5).map((item) => {
            return (
              <BrandCard
            
                
                img={item.image}
              />
            );
          })
        ) : 
          <h2>لا يوجد ماركات</h2>
        ) : (
          <h2>
            جاري التحميل
<Spinner animation="border" variant="info" className="mx-4"/>
          </h2>
        )
      }
      </Row>
    </Container>
  )
}
