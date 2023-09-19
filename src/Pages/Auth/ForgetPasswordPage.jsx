
import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import ForgetPasswordHook from '../../Hook/Auth/ForgetPasswordHook'


export default function ForgetPasswordPage() {

    const [onChangeEmail,email,onSubmit]=ForgetPasswordHook();

  return (
    <div className='font' style={{minHeight:'670px'}}>
         <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login"> نسيت كلمه السر !!</label>
                        <input
     value={email}
     onChange={onChangeEmail}                       placeholder="الايميل..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
 <button onClick={onSubmit} className="btn-login mx-auto mt-4"> إرسال الكود</button>
 
                    </Col>

                </Row>
                <ToastContainer/>
            </Container>
        </div>
  )
}
