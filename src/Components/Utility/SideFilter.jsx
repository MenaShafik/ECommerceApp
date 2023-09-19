import React from 'react'
import { Row } from 'react-bootstrap'
import SidebarSearchHook from '../../Hook/Search/SidebarSearchHook'

export default function SideFilter() {
  const [ category, brand,clickCat,clickBrand,priceFrom,priceTo]=SidebarSearchHook();
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");

  return (
    <div className="mt-3">
    <Row>
      <div className="d-flex flex-column mt-2">
        <div className="filter-title">الفئة</div>

{
  category?(category.map((item,index)=>{
    return(
      <div key={index} className="d-flex mt-3">
          <input 
           onChange={clickCat} type="checkbox" value={item._id} />
          <div className="filter-sub me-2 ">{item.name}</div>
</div>
    )
  })):<h3>لا يوجد تصنيفات</h3>
}
</div>
<div className="d-flex flex-column mt-3">
<div className="filter-title">الماركة</div>
</div>
{
  brand?(brand.map((item,index)=>{
    return(
      <div key={index} className="d-flex mt-3">
      <input onChange={clickBrand} type="checkbox" value={item._id} />
      <div className="filter-sub me-2 ">{item.name}</div>
</div>
    )
  }
  )):<h3>لا يوجد ماركات</h3>
}
      
      <div className="filter-title my-3">السعر</div>
      <div className="d-flex">
        <p className="filter-sub my-2">من:</p>
        <input value={localFrom} onChange={priceFrom}
          className="m-2 text-center"
          type="number"
          style={{ width: "50px", height: "25px" }}
        />
      </div>
      <div className="d-flex">
        <p className="filter-sub my-2">الي:</p>
        <input value={localTo} onChange={priceTo}
          className="m-2 text-center"
          type="number"
          style={{ width: "50px", height: "25px" }}
        />
      </div>
    </Row>
  </div>
  )
}
