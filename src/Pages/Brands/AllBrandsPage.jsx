import React from 'react'
import Pagination from '../../Components/Utility/Pagination'
import BrandCardContainer from '../../Components/Brand/BrandCardContainer'
import AllBrandPageHook from '../../Hook/Brand/AllBrandPageHook';


export default function AllBrandsPage() {
  const [brand,loading,pageCount,getPage] =AllBrandPageHook();

  return (
    <div className="font" style={{minHeight:'670px'}}>
      <BrandCardContainer data={brand.data} loading={loading}/>

     <Pagination  PageCount={pageCount} onPress={getPage}/>
    </div>
  )
}
