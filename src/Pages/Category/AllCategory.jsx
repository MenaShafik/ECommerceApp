

import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import AllCategoryPageHook from "../../Hook/Category/AllCategoryPageHook";


export default function AllCategory() {
  const [Category,loading,pageCount,getPage] = AllCategoryPageHook();
  return (
    <div style={{ minWidth: "670px" }}>

      <CategoryContainer data={Category.data} loading={loading}/>
      {pageCount>1?(<Pagination PageCount={pageCount} onPress={getPage}/>):null}
      
    </div>
  );
}
