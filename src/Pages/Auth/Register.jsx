import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../Hook/Auth/RegisterHook'
import { ToastContainer } from 'react-toastify'
export default function Register() {
const [name, password,email,phone,loading,confirmPass, onChangePassword,onChangeEmail,onChangeConfirmPass,onChangeName,onChangePhone,onSubmit]=RegisterHook();
  return (
    <div className="font">
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center hieght-search">
      <Col sm="12" className="d-flex flex-column ">
        <label className="mx-auto title-login">تسجيل حساب جديد</label>
        <input
          placeholder="اسم المستخدم..."
          value={name}
          onChange={onChangeName}
          type="text"
          className="user-input mt-3 text-center mx-auto"
        />
        <input
value={email}  
onChange={onChangeEmail}        placeholder="الايميل..."
          type="email"
          className="user-input mt-3 text-center mx-auto"
        />
        <input
value={phone}  
onChange={onChangePhone}        placeholder="الهاتف..."
          type="phone"
          className="user-input mt-3 text-center mx-auto"
        />
        <input
          placeholder="كلمه السر..."
          onChange={onChangePassword}
          value={password}
          type="password"
          className="user-input text-center mx-auto mt-3"
        />
        <input
          placeholder="تأكيد كلمه السر..."
          value={confirmPass}
          onChange={onChangeConfirmPass}
          type="password"
          className="user-input text-center mx-auto mt-3"
        />
        <button onClick={onSubmit} className="btn-login mx-auto mt-3">تسجيل الحساب</button>
        <label className="mx-auto my-4">
          لديك حساب بالفعل؟{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              اضغط هنا
            </span>
          </Link>
        </label>
      </Col>
    </Row>
  </Container>
  <ToastContainer/>
</div>
  )
}
