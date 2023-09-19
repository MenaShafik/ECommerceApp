import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../Redux/Actions/ProductsAction';

export default function ViewHomeProductHook() {

const dispatch =useDispatch();

useEffect(()=>{
    dispatch(getAllProduct())
},[])
const allPRODUCTS =useSelector((state) => state.allProduct.allProducts);

let item = [];
if (allPRODUCTS.data) {
    item=allPRODUCTS.data.slice(0,4);
}
else{
    item=[]
}

return[item]
}
