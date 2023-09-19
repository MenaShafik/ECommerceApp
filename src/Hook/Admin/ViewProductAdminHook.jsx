import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, getAllProductPage } from '../../Redux/Actions/ProductsAction';

export default function ViewProductAdminHook() {

const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(getAllProduct(9))
    },[])

    /// pagination sietting
const onPress = async(page) => {
        await dispatch(getAllProductPage(page,9))
      }

    const allPRODUCTS =useSelector((state) => state.allProduct.allProducts);
let pagination = [];
let item = [];
    try{
    if (allPRODUCTS.data) {
    item=allPRODUCTS.data
    }
    else{
        item=[]
    }
    if (allPRODUCTS.paginationResult) {
        pagination=allPRODUCTS.paginationResult.numberOfPages
    }
    else{
        pagination=[]
    }
}catch(e){}
return[item,pagination,onPress]
}
