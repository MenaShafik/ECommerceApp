import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Components/Cart/CartItem'
import CartCheckout from '../../Components/Cart/CartCheckout'

export default function CartPage() {
  return (
    <div className='font'>
    <Container  style={{minHeight:'670px'}}>
<Row>
    <div className="cart-title mt-4">
عربة التسوق
    </div>
</Row>
<Row className='d-flex justify-content-center'>
<Col xs="12" md="9">
<CartItem/>
<CartItem/>
</Col>

<Col xs="6" md="3">
    <CartCheckout/>
</Col>

</Row>
    </Container>
    </div>
  )
}
