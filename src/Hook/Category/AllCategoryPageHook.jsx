import { useDispatch, useSelector } from "react-redux";
import { Get_All_Category, Get_All_Category_Page } from "../../Redux/Actions/CategoryAction";
import { useEffect } from "react";
export default function AllCategoryPageHook() {

    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_All_Category(6));
  }, []);

  const Category = useSelector(state => state.allCategory.category);
  const loading = useSelector(state => state.allCategory.loading);
  let pageCount = 0;
  if (Category.paginationResult) {

    pageCount = Category.paginationResult.numberOfPages;
  }

const getPage =(page)=>{
dispatch(Get_All_Category_Page(page))
console.log(page)
}
return[Category,loading,pageCount,getPage]
}
