import React from 'react'
import UserAllOrderItem from './UserAllOrderItem'
import { Row } from 'react-bootstrap'

export default function UserAllOrders() {
  return (
    <div>
    <div className="admin-content-text pb-4">اهلا محمد على</div>
    <Row className='justify-content-between'>
       <UserAllOrderItem />
       <UserAllOrderItem />
       <UserAllOrderItem />
    </Row>
    </div>
  )
}
