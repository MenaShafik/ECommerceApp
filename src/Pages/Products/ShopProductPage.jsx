import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../Components/Utility/SideFilter'
import ProductCardContainer from '../../Components/Products/ProductCardContainer'
import Pagination from '../../Components/Utility/Pagination'
import ViewSearchProductHook from '../../Hook/Products/ViewSearchProductHook'

export default function ShopProductPage() {
  const [item, pagination, onPress, getProduct, results] = ViewSearchProductHook();

if (pagination) {
var pageCount = pagination ;
}
else{
  pageCount = 0;
}
  return (
    <div className='font' style={{minHeight:"670px"}}>
      <CategoryHeader/>
      <Container><SearchCountResult onClick={getProduct} title={`${results} منتج متوفر`}/>
      <Row className='d-flex flex-row'>
        <Col sm="2" xs="2" md="1" className='d-flex'>
      <SideFilter/>
        </Col>
        <Col sm="10" xs="10" md="11">
<ProductCardContainer title="" btnTitle="" products={item}/>
        </Col>
      </Row>
      <Pagination PageCount={pageCount} onPress={onPress}/>
      </Container>
  
    </div>
  )
}
