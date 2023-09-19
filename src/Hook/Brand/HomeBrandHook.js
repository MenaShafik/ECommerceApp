import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Get_All_Brand } from '../../Redux/Actions/BrandsAction';

export default function HomeBrandHook() {
    const dispatch =useDispatch()
    useEffect(()=>{
      dispatch(Get_All_Brand())
    },[])
    const brand =useSelector(state=>state.allBrand.brand)
      const loading = useSelector(state => state.allBrand.loading);
      
 return[brand,loading]
}
