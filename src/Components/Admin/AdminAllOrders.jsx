import React from 'react'
import AdminAllOrderItem from './AdminAllOrderItem'
import { Row } from 'react-bootstrap'

export default function AdminAllOrders() {
  return (
    <div>
    <div className='admin-content-text'>ادارة جميع الطلبات</div>
    <Row className='justify-content-start'>
<AdminAllOrderItem/>
<AdminAllOrderItem/>
<AdminAllOrderItem/>

    </Row>
</div>
  )
}
