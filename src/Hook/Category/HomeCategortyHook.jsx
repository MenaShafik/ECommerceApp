import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Get_All_Category } from "../../Redux/Actions/CategoryAction";
export default function HomeCategortyHook() {
    const dispatch =useDispatch()
    useEffect(()=>{
      dispatch(Get_All_Category())
    },[])
    const category =useSelector(state=>state.allCategory.category)
      const loading = useSelector(state => state.allCategory.loading);
      const colors = [
        "#09c",
        "gold",
        "green",
        "red",
        "gray",
        "blue",
      ];
      return[category,loading, colors]
}
