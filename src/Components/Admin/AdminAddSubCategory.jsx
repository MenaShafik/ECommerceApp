import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Get_All_Category } from '../../Redux/Actions/CategoryAction'
import notify from '../../Hook/UseNotification';
import { ToastContainer } from 'react-toastify';
import { CREATE_SUB_CATEGORY } from '../../Redux/Type';
import { CreateSubCategory } from '../../Redux/Actions/SubCategoryAction';
import SubCategoryHook from '../../Hook/SubCategory/SubCategoryHook';

export default function AdminAddSubCategory() {
const [id,name,loading,category,subcategory,changeHandler,submitHandler,onChangeName] = SubCategoryHook();
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف رئيسي جديد</div>
        <Col sm="8">
            <input
                type="text"
                value={name}  onChange={onChangeName} className="input-form d-block mt-3 px-3"
                placeholder="اسم التصنيف الفرعي"
            />
            <select name="category" id="cat" className="select mt-3 px-2 " onChange={changeHandler}>
                <option value="0"> إختر تصنيف رئيسي</option>
                {
                    category.data?(category.data.map((item) => {
                        return (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        )
                    })):null
                }
            </select>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={submitHandler} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
    <ToastContainer/>
</div>
  )
}