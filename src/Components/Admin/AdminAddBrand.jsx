import React from "react";
import { Row, Col, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AddBrandHook from "../../Hook/Brand/AddBrandHook"; 

export default function AdminAddBrand() {
  const [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName]=AddBrandHook();
  return (
      <div>
          <Row className="justify-content-start ">
              <div className="admin-content-text pb-4">اضف ماركه جديده</div>
              <Col sm="8">
                  <div className="text-form pb-2">صوره الماركه</div>
                  <div>
                      <label for="upload-photo">
                          <img
                              src={img}
                              alt="fzx"
                              height="100px"
                              width="120px"
                              style={{ cursor: "pointer" }}
                          />
                      </label>
                      <input
                          type="file"
                          name="photo"
                          onChange={onImageChange}
                          id="upload-photo"
                      />
                  </div>
                  <input
                      type="text"
                      value={name}
                      className="input-form d-block mt-3 px-3"
                      placeholder="اسم الماركه"
                      onChange={onChangeName}
                  />
              </Col>
          </Row>
          <Row>
              <Col sm="8" className="d-flex justify-content-end ">
                  <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
              </Col>
          </Row>

          {isPress ? (
        loading ? (
          <h4>
            جاري التحميل
            <Spinner animation="border" variant="info" className="mx-4" />
          </h4>
        ) : (
          <h2>تم الانتهاء</h2>
        )
      ) : null}
      <ToastContainer />
      </div>
  )
}
