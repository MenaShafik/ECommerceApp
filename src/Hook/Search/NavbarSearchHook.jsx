import { useState } from 'react'
import ViewSearchProductHook from '../Products/ViewSearchProductHook'
import { useEffect } from 'react'

export default function NavbarSearchHook() {


const[searchWord,setSearchWord]= useState('')
const [item, pagination, onPress, getProduct, results] =ViewSearchProductHook()
const onChangeSearch =(e)=>{
    localStorage.setItem('searchWord',e.target.value)
setSearchWord(e.target.value)
const path = window.location.pathname;
if (path!="/products"){
    // window.location.href="/products"
}
}

useEffect(()=>{
    setTimeout(() => {
    getProduct()
    }, 1000);

},[searchWord])

return[searchWord,onChangeSearch]
}
