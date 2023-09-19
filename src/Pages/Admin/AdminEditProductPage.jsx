import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddProducts from '../../Components/Admin/AdminAddProducts'
import AdminEditProducts from '../../Components/Admin/AdminEditProducts'


export default function AdminEditProductPage() {
  return (
<div className='font'>
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
        </Col>

        <Col sm="9" xs="10" md="10">
            <AdminEditProducts />
        </Col>
    </Row>
</Container>
</div>
  )
}

