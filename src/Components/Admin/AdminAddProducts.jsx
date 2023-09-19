import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import { Col, Row } from "react-bootstrap";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";

import React from "react";
import AddProductHook from "../../Hook/Products/AddProductHook";

export default function AdminAddProducts() {
  const [
    submitHandler,
    onSelectBrand,
    onSelectCategory,
    onSelect,
    onRemove,
    getUploadParams,
    handleChangeStatus,
    handleSubmit,
    changeCompleteHandler,
    removeColor,
    brands,
    category,
    priceAfter,
    priceBefore,
    options,
    colors,
    qty,
    description,
    productName,
    show,
    setProductName,
    setDescription,
    setPriceBefore,
    setPriceAfter,
    setQty,
    setShow,
  ] = AddProductHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="اسم المنتج"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefore}
            onChange={(e) => setPriceBefore(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={priceAfter}
            onChange={(e) => setPriceAfter(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder=" الكميه المتاحة"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <select
            name="cat"
            onChange={onSelectCategory}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            onChange={onSelectBrand}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">الماركة</option>
            {brands.data
              ? brands.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}

            <img
              onClick={() => setShow(!show)}
              style={{ cursor: "pointer" }}
              src={add}
              alt=""
              width="30px"
              height="35px"
              className=""
            />
            {show === true ? (
              <CompactPicker onChangeComplete={changeCompleteHandler} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={submitHandler} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
