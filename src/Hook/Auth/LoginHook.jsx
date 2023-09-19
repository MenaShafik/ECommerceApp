import React, { useEffect, useState } from "react";
import notify from "./../UseNotification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUsers } from "../../Redux/Actions/AuthAction";
export default function LoginHook() {
  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    await dispatch(loginUsers({
        email,
        password
    }))
    setLoading(false)
    setIsPress(false);
  };
  //
  const res = useSelector(state => state.createUser.loginUser);
//
useEffect(() => {
  if (loading === false) {
      if (res) {
          console.log(res)
          if (res.data.token) {
              localStorage.setItem("token", res.data.token)
              localStorage.setItem("user", JSON.stringify(res.data.data))
              notify("تم تسجيل الدخول بنجاح", "success")
              setTimeout(() => {
                  window.location.href = "/"
              }, 1500);
          } else {
              localStorage.removeItem("token")
              localStorage.removeItem("user")
          }

          if (res.data.message === "Incorrect email or password") {
              localStorage.removeItem("token")
              localStorage.removeItem("user")
              notify("كلمة السر او الايميل خطا", "error")
          }
          setLoading(true)
      }
  }
}, [loading])

// useEffect(()=>{
//     if(loading === false){
//         if(res){
//     console.log(res)
//     if (res.data.token) {
//  localStorage.setItem("token",res.data.token)
//  notify("تم تسجيل الدخول بنجاح", "success")
//   }      
// else{
//  localStorage.removeItem("token")
// }
// if(res){
//   console.log(res)
//   // if (res.status===500) {
//   // localStorage.removeItem("token")
//   // notify("كلمة السر او الايميل خطا", "error")  
//   // }
  
// }
//     setLoading(true)
//     }
//     }
// },[loading])

  return [onChangeEmail, onChangePassword, email, password, loading, onSubmit,isPress];
}
