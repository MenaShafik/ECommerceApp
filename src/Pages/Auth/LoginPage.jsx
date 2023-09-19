import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../Hook/Auth/LoginHook'
import { ToastContainer } from 'react-toastify'


export default function LoginPage() {
    const [onChangeEmail, onChangePassword, email, password, loading, onSubmit,isPress] =LoginHook();
  return (
    <div className='font' style={{minHeight:'670px'}}>
         <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">تسجيل الدخول</label>
                        <input
     value={email}
     onChange={onChangeEmail}                       placeholder="الايميل..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
      value={password}
      onChange={onChangePassword}                      placeholder="كلمه السر..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button onClick={onSubmit} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                        <label className="mx-auto my-4">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>

                        <label className="mx-auto my-4">
                            <Link to="/user/forgetPassword" 
className='text-danger'                            style={{textDecoration:'none'}}>
                     هل نسيت كلمه السر  !!       </Link>
                        </label>

{isPress===true?(loading===true?(
<Spinner animation='border' role='status'>
</Spinner>
):null):null}

                    </Col>


                    <label className="mx-auto my-4">
                    <Link to="/admin/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                            الدخول كادمن
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                            الدخول مستخدم
                        </span>
                    </Link>
                </label>
                </Row>
                <ToastContainer/>
            </Container>
        </div>
  )
}
