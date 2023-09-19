
import {useGetData} from "../../Hooks/UseGetData";
import { UseInsertDataImage } from "../../Hooks/UseInsertData";
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../Type";

export const Get_All_Brand = (limit) => async (dispatch) => {
  try {

    const response = await useGetData(`/api/v1/brands?limit=${limit}`)
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};
//get one brand
export const Get_One_Brand = (id) => async (dispatch) => {
  try {

    const response = await useGetData(`/api/v1/brands/${id}`)
    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};

export const Get_All_Brand_Page = (page) => async (dispatch) => {
  try {

    const response = await useGetData(`/api/v1/brands?limit=4&page=${page}`)
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};


export const CreateBrand = (formData) => async (dispatch) => {
  try {

    const response = await UseInsertDataImage(`/api/v1/brands`,formData)
    dispatch({
      type: CREATE_BRAND,
      payload: response,
      loading:true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};