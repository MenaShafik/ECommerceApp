import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
getAllProductSearch
} from "../../Redux/Actions/ProductsAction";

export default function ViewSearchProductHook() {
  let limit = 8;
  const dispatch = useDispatch();
////////////////////////////////////////////////////////////////
  const getProduct = async () => {
    sortData();
getStorage();

if(priceFrom==""||priceFrom <= 0){
 priceFromString ="";
}
else{
 priceFromString =`&price[gt]=${priceFrom}`;
}
    //
    if(priceTo==""||priceTo <= 0){
     priceToString ="";
    }
    else{
     priceToString =`&price[lte]=${priceTo}`;
    }
    //
    await dispatch(
getAllProductSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`)
    );
  };
  //
  useEffect(() => {
    getProduct();
  }, []);
  const allPRODUCTS = useSelector((state) => state.allProduct.allProducts);

  let pagination = [];
  let results = 0;
  let item = [];
  try {
    if (allPRODUCTS.data) 
      item = allPRODUCTS.data;
     else 
      item = [];
    
  } catch (e) {}
  try {
    if (allPRODUCTS.paginationResult) 
      pagination = allPRODUCTS.paginationResult.numberOfPages;
     else 
      pagination = [];
    
  } catch (e) {}
  try {
    if (allPRODUCTS.results) 
      results = allPRODUCTS.results;
     else 
      results = 0;
  } catch (e) {}
////////////////////////////////////////////////////////////////
  const getStorage =()=>{
    if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");
  //
    if (localStorage.getItem("catChecked") != null)
    queryCat= localStorage.getItem('catChecked');
  //
  if (localStorage.getItem("brandChecked") != null)
    queryBrand= localStorage.getItem('brandChecked');
  //
  if (localStorage.getItem("priceTo") != null)
  priceTo= localStorage.getItem('priceTo');
  //
  if (localStorage.getItem("priceFrom") != null)
  priceFrom= localStorage.getItem('priceFrom');
  }
  //on click on pagination
  const onPress = async (page) => {   
getStorage();
 sortData();
await dispatch(
getAllProductSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`));
  };

  let word = "",queryCat="",queryBrand="",priceTo="",priceFrom="", sortType = "",priceFromString ="", priceToString ="",sort;


  // when user selects sort by    
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) 
      sortType = localStorage.getItem("sortType");
     else 
      sortType = "";
    if (sortType === "السعر من الاقل للاعلي") 
      sort = `+price`;
     else if (sortType === "السعر من الاعلي للاقل") 
      sort = `-price`;
     else if (sortType === "") 
      sort = "";
      else if (sortType === "الأكثر مبيعا") 
      sort = "-sold"; 
      else if (sortType === "الاعلي تقييما") 
      sort = "-quantity";
  };

    return [item, pagination, onPress, getProduct, results];
}
