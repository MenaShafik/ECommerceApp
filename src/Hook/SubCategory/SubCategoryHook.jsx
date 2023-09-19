import React from 'react'
import { useEffect, useState } from 'react';
    import { CreateSubCategory } from '../../Redux/Actions/SubCategoryAction'; 
    import { useSelector, useDispatch } from 'react-redux'
    import notify from '../UseNotification'; 
    import {Get_All_Category } from '../../Redux/Actions/CategoryAction'; 
export default function SubCategoryHook() {

    const dispatch = useDispatch();
    useEffect(() => {
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        dispatch(Get_All_Category());
    }, [])
    const [id, setID] = useState('0')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    //get last catgeory state from redux
    const category = useSelector(state => state.allCategory.category)

    //get last sub catgeory state from redux
    const subcategory = useSelector(state => state.subCategory.subcategory)
    
    //on change dropdown menu
    const changeHandler = (e) => {
        setID(e.target.value)
    }
    

    //to save name
    const onChangeName = (e) => {
        e.persist();
setName(e.target.value)
    }
    //on save data 
    const submitHandler = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        if (id === "0") {
            notify("من فضلك اختر تصنيف رئيسي", "warn")
            return;
        }
        if (name === "") {
            notify("من فضلك ادخل اسم التصنيف", "warn")
            return;
        }
    
        setLoading(true)
        await dispatch(CreateSubCategory({
            name,
            category: id
        }))
        setLoading(false)
    
    }
    useEffect(() => {
    
        if (loading === false) {
            setName("")
            setID("0")
            if (subcategory)
                console.log(subcategory)
            if (subcategory.status === 201) {
                notify("تمت الاضافة بنجاح", "success")
            }
            else if (subcategory.message === "Request failed with status code 400") {
                notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "error")
            }
            else {
                notify("هناك مشكله فى عملية الاضافة", "warn")
            }
    
            setLoading(true)
        }
    }, [loading])
return[id,name,loading,category,subcategory,changeHandler,submitHandler,onChangeName]
}
