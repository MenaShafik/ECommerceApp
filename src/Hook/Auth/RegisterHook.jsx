import React ,{ useEffect, useState } from "react";
import notify from './../UseNotification';
import { useDispatch,useSelector } from "react-redux";
import { CreateNewUser } from "../../Redux/Actions/AuthAction";
import { useNavigate } from "react-router-dom";
export default function RegisterHook() {
const dispatch = useDispatch();

const Navigate = useNavigate();
const[name,setName] =  useState('')
const[email,setEmail] =  useState('')
const[phone,setPhone] =  useState('')
const[password,setPassword] =  useState('')
const[confirmPass,setConfirmPass] =  useState('')
const[loading,setLoading] =  useState('')

const onChangeName=(e)=>{
    setName(e.target.value)
}
const onChangePhone=(e)=>{
    setPhone(e.target.value)
}
const onChangeEmail=(e)=>{
    setEmail(e.target.value)
}
const onChangePassword=(e)=>{
    setPassword(e.target.value)
}
const onChangeConfirmPass=(e)=>{
    setConfirmPass(e.target.value)
}
const validationValues =()=>{
    if (name ==="") {
        notify("من فضلك أدخل إسم المستخدم","error")
        return;
    }
    if (phone.length<=10) {
        notify("من فضلك أدخل رقم هاتف صحيح","error") 
        return;
    }
    if (password!=confirmPass) {
        notify("من فضلك تأكد من أن كلمه السر صحيحه","error") 
    }

}
const res = useSelector(state=>state.createUser.createUser);
//save the data
const onSubmit= async()=>{
validationValues();
setLoading(true)
await dispatch(CreateNewUser(
    {
name ,
email,
password,
passwordConfirm:confirmPass,phone,
    }
))
setLoading(false)
}
useEffect(()=>{
if (loading===false) {
    if (res.data.token) {
        
localStorage.setItem("token",res.data.token)
notify("لقد تم تسجيل دخولك بنجاج",'success')
setTimeout(() => {
    setName('');
setEmail('');
setConfirmPass('');
setPassword('');
setPhone('');
setLoading(true);
    Navigate('/login')
}, 2500);
    }
    if(res.data.errors){
        if (res.data.errors[0].msg ==="E-mail already in use") {
            notify("هذه الايميل مسجل من قبل ","error")
        }
        if(res.data.errors[0].msg ==="accept only egypt phone numbers") {
notify("يجب أن يكون الرقم مصري ومكون من 11 رقم","error")
        } 
        if(res.data.errors[0].msg ==="Invalid email formate") {
            notify("يجب إدخال البريد بشكل صحيح","error")} 
    
            if(res.data.errors[0].msg ==="must be at least 6 chars") {
                notify("يجب إدخال الرقم السري علي الاقل 6 أحرف","error")} 
           
                if(res.data.errors[0].msg ==="passwordConfirm is required field") {
                    notify("يجب إعادة إدخال الرقم السري بشكل صحيح","error")}           // 
                    if(res.data.errors[0].msg ==="Password required") {
                        notify("يجب الرقم السري ","error")}  
                }
}
console.log(res.data)
},[loading])
return [name, password,email,phone,loading,confirmPass, onChangePassword,onChangeEmail,onChangeConfirmPass,onChangeName,onChangePhone,onSubmit ]
}
