import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Get_All_Category } from '../../Redux/Actions/CategoryAction';
import { Get_All_Brand } from '../../Redux/Actions/BrandsAction';
import ViewSearchProductHook from '../Products/ViewSearchProductHook';

export default function SidebarSearchHook() {
   const [item, pagination, onPress, getProduct, results] =ViewSearchProductHook();
    const dispatch = useDispatch();
  useEffect(() => {
    const getData =async()=>{
 await       dispatch(Get_All_Category());
    
 await dispatch(Get_All_Brand());
 }
 getData() 
}, []);

  const allCat = useSelector(state => state.allCategory.category);


  const allBrands = useSelector(state => state.allBrand.brand);

  let category = [];
  if (allCat.data) 
    category = allCat.data;
  //
  let brand = [];
  if (allBrands.data) {
    brand = allBrands.data;
  }
  //
  var queryCat ="", queryBrand ="";
  const [catChecked,setCatChecked]=useState([]);

  const clickCat=(e)=>{
let value = e.target.value;
if(value==="0"){
    setCatChecked([])
}
else{
 if(e.target.checked===true){
setCatChecked([...catChecked,value])
  }
  else if(e.target.checked ===false){
    const newArray =catChecked.filter((e)=>e!=value)
    setCatChecked(newArray)
}
}
}
useEffect(()=>{
    queryCat= catChecked.map(val=>"category[in][]="+val).join('&');
console.log(queryCat)
localStorage.setItem('catChecked',queryCat);
setTimeout(() => {
getProduct()
}, 1000);
},[catChecked])

const [brandChecked,setBrandChecked]=useState([]);

const clickBrand=(e)=>{
let value = e.target.value;
if(value==="0"){
    setBrandChecked([])
}
else if(e.target.checked===true){
    setBrandChecked([...brandChecked,value])
}
else if(e.target.checked ===false){
  const newArray =brandChecked.filter((e)=>e!=value)
  setBrandChecked(newArray)
}
}
useEffect(()=>{
    queryBrand= brandChecked.map(val=>"brand[in][]="+val).join('&');
console.log(queryBrand)
localStorage.setItem('brandChecked',queryBrand);
setTimeout(() => {
getProduct()
}, 1000);
},[brandChecked])

const [price_From,setPriceFrom]=useState(0)
const [price_To,setPriceTo]=useState(0)

const priceFrom=(e)=>{
localStorage.setItem("priceFrom",e.target.value)
setPriceFrom(e.target.value)
}
const priceTo=(e)=>{
    localStorage.setItem("priceTo",e.target.value)
    setPriceTo(e.target.value)
    }
    
useEffect(()=>{
setTimeout(() => {
    getProduct();
}, 1000);
},[price_From,price_To])
  return [ category, brand,clickCat,clickBrand,priceFrom,priceTo]
}
