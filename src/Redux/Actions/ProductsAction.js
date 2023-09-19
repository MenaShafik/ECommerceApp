import useDeleteData from "../../Hooks/UseDeleteData";
import {useGetData} from  "../../Hooks/UseGetData";
import { UseInsertDataImage } from "../../Hooks/UseInsertData";
import { UseUpdateDataImage } from "../../Hooks/UseUpdateData";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_SAME_PRODUCTS, GET_SPECIFIC_PRODUCTS, UPDATE_PRODUCT } from "../Type";





export const CreateProduct = (formatData) => async (dispatch) => {
    try {
  
      const response = await UseInsertDataImage(`/api/v1/products`,formatData)
      dispatch({
        type: CREATE_PRODUCT,
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

  export const getAllProduct = (limit) => async (dispatch) => {
    try {
  
      const response = await useGetData(`/api/v1/products?limit=${limit}`)
      dispatch({
        type: GET_ALL_PRODUCTS,
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

  export const getSpecificProduct = (id) => async (dispatch) => {
    try {
  
      const response = await useGetData(`/api/v1/products/${id}`);
      dispatch({
        type: GET_SPECIFIC_PRODUCTS,
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

  //
  export const getSameProduct = (id) => async (dispatch) => {
    try {
  
      const response = await useGetData(`/api/v1/products/?category=${id}`);
      dispatch({
        type: GET_SAME_PRODUCTS,
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

  //
  export const deleteProduct = (id) => async (dispatch) => {
    try {
  
      const response = await useDeleteData(`/api/v1/products/${id}`);
      dispatch({
        type: DELETE_PRODUCT,
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
//all products with page number 
  export const getAllProductPage = (page,limit) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);
      dispatch({
        type: GET_ALL_PRODUCTS,
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

  export const UpdateProduct = (id,data) => async (dispatch) => {
    try {
  
      const response = await UseUpdateDataImage(`/api/v1/products/${id}`,data);
      dispatch({
        type: UPDATE_PRODUCT,
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

// get all products with query string
  export const getAllProductSearch = (querySrtring) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products?${querySrtring}`);
      dispatch({
        type: GET_ALL_PRODUCTS,
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