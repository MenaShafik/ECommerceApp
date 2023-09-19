import React, { useEffect,useState } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { CreateCategory } from "../../Redux/Actions/CategoryAction";
import notify from "../UseNotification";
export default function AddCategoryHook() {

    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [selectedImg, setSelectedImg] = useState();
    const [loading, setLoading] = useState(true);
    const [press, setPress] = useState(false);
  
    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImg(URL.createObjectURL(event.target.files[0]));
        setSelectedImg(event.target.files[0]);
      }
    };
    const onChangeName = (event)=>{
      event.persist()
setName(event.target.value);
    }
    const res = useSelector((state) => state.allCategory.category);
  
  
    const submitHandler = async (event) => {
      event.preventDefault();
      if (name === "" || selectedImg === null) {
        notify("من فضلك اكمل البيانات", "warn");
        console.log('complete data !!')
        return;
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", selectedImg);
      setLoading(true);
      setPress(true);
      await dispatch(CreateCategory(formData));
      setLoading(false);
    };
    useEffect(() => {
      if (loading === false) {
        setName("");
        setImg(avatar);
        setSelectedImg(null);
        setLoading(true);
        setTimeout(() => setPress(false), 1000);
        if (res.status === 201) {
          notify("تم إضافة القسم بنجاح", "success");
          console.log("تم إضافة القسم بنجاح")
        } else {
          notify("هناك مشكله في عمليه الاضافه", "error");
          console.log("هناك مشكله في عمليه الاضافه")
        }
      }
    }, [loading]);
    return[img,name,loading,press,submitHandler,onImageChange,onChangeName]
}
