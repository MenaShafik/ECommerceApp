import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { Get_All_Brand_Page,Get_All_Brand } from "../../Redux/Actions/BrandsAction";
export default function AllBrandPageHook() {

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_All_Brand(4));
  }, []);

  const brand = useSelector(state => state.allBrand.brand);
  const loading = useSelector(state => state.allBrand.loading);
  let pageCount = 0;
  if (brand.paginationResult) {

    pageCount = brand.paginationResult.numberOfPages;
  }

const getPage =(page)=>{
dispatch(Get_All_Brand_Page(page))
console.log(page)
}
return[brand,loading,pageCount,getPage]
}
