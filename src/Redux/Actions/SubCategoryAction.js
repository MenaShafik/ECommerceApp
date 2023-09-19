import {useGetData} from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import {CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../Type";

export const CreateSubCategory = (Data) => async (dispatch) => {
    try {
  
      const response = await UseInsertData(`/api/v1/subcategories`,Data)
      dispatch({
        type: CREATE_SUB_CATEGORY,
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


  
export const getOnCategory = (id) => async (dispatch) => {
  try {

    const response = await useGetData(`/api/v1/categories/${id}/subcategories`)
    dispatch({
      type: GET_SUB_CATEGORY,
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