import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../Redux/Actions/AuthAction';
import { useEffect } from 'react';
import notify from '../UseNotification';

export default function ForgetPasswordHook() {
    const dispatch = useDispatch();

    const Navigate = useNavigate();
    //
const [email,setEmail]=useState('')
const [loading,setLoading]=useState(true);
const onChangeEmail =(e)=>{
    setEmail(e.target.value)
}
const onSubmit=async()=>{
    if (email==="") {
        notify("من فضلك أدخل البريد الخاص بك","warn")
    }
    setLoading(true)
await dispatch(forgetPassword({
    email,
}))
setLoading(false)
}
const res = useSelector(state=>state.createUser.UpdateProducts)
useEffect(()=>{
    if (loading===false) {
        if (res) {
            console.log(res)
            if(res.data.status === "success"){
                notify("the code has been sent","success")

            }
            if(res.data.status === "fail"){
                notify("the code has been sent","error")
                
            }
        }
    }
},[loading])

return[onChangeEmail,email,onSubmit]
}
