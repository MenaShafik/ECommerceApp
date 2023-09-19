
import {useGetData} from "../../Hooks/UseGetData";
import { UseInsertDataImage } from "../../Hooks/UseInsertData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../Type";

export const Get_All_Category = (limit) => async (dispatch) => {
  try {

    const response = await useGetData(`/api/v1/categories?limit=${limit}`)
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};
export const Get_Specific_Category = (id) => async (dispatch) => {
  try {

    const response = await useGetData(`/api/v1/categories/${id}
    `)
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};

export const Get_All_Category_Page = (page) => async (dispatch) => {
  try {

    const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`)
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};


export const CreateCategory = (formData) => async (dispatch) => {
  try {

    const response = await UseInsertDataImage(`/api/v1/categories`,formData)
    dispatch({
      type: CREATE_CATEGORY,
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