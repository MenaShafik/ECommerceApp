import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSameProduct, getSpecificProduct } from '../../Redux/Actions/ProductsAction';
import mobile from '../../images/mobile.png'
import { Get_Specific_Category } from '../../Redux/Actions/CategoryAction';
import { Get_One_Brand } from '../../Redux/Actions/BrandsAction';
export default function ViewProductDetailsHook(prodID) {
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(getSpecificProduct(prodID))

    },[])
    const onePRODUCTS =useSelector((state) => state.allProduct.specificProduct);
    const oneCATEGORY =useSelector((state) => state.allCategory.oneCategory);

    const oneBRAND =useSelector((state) => state.allBrand.oneBrand);
    console.log(oneBRAND)

    const simellerProduct =useSelector((state) => state.allProduct.simellerProduct);


    //to show products item
 let item = [];
if (onePRODUCTS.data) {
item=onePRODUCTS.data;
    }
    else{
        item=[]
}

    ///////////////////////
    useEffect(()=>{
        if(item.category)            dispatch(Get_Specific_Category(item.category))
        if(item.brand)
dispatch(Get_One_Brand(item.brand))
if(item.category)
dispatch(getSameProduct(item.category))
                },[item])

                //////////////////////

    //to view images at every single item in the products ids
    
let imgs =[] ;
if (item.images) {
imgs = item.images.map((img)=>{
   return {original:img}})}
else{
        imgs = [{
original: `${mobile}`}]
    }    
    // to show category item
    let cat = [];
    if (oneCATEGORY.data) {
        cat=oneCATEGORY.data;
    }
    else{
        cat=[]}
      // to show brand item
      let brand = [];
      if (oneBRAND.data) {
        brand=oneBRAND.data;
      }
      else{
          brand=[]
console.log(brand)  } 

let prod =[]
if(simellerProduct)
prod =simellerProduct.data
else
prod=[]
 return[item,imgs,cat,brand,prod]
    }


