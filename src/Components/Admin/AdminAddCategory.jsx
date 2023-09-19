import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCategoryHook from "../../Hook/Category/AddCategoryHook";
export default function AdminAddCategory() {
  const [img,name,loading,press,submitHandler,onImageChange,onChangeName] = AddCategoryHook();
 
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
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
            onChange={onChangeName}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={submitHandler} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {press ? (
        loading ? (
          <h4>
            جاري التحميل
            <Spinner animation="border" variant="info" className="mx-4" />
          </h4>
        ) : (
          <h2>it's done</h2>
        )
      ) : null}
      <ToastContainer />
    </div>
  );
}
