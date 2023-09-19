import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePaymentMethod from './ChoosePaymentMethod'

export default function ChoosePayment() {
  return (
    <div className='font'>
    <Container  style={{minHeight:"670px"}}>
      <ChoosePaymentMethod/>
    </Container>
    </div>
  )
}
