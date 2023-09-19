import {useGetData, useGetDataToken} from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { CREATE_NEW_USER, FORGET_PASSWORD, GET_CURRENT_USER, LOGIN_USER,  } from "../Type";

export const CreateNewUser = (data) => async (dispatch) => {
    try {
  
      const response = await UseInsertData(`/api/v1/auth/signup`,data)
      dispatch({
        type: CREATE_NEW_USER,
        payload: response,
        loading:true,
      });
    } catch (error) {
      dispatch({
        type: CREATE_NEW_USER,
        payload: error.response,
      });
    }
  };

  export const loginUsers = (data) => async (dispatch) => {
    try {
  
      const response = await UseInsertData(`/api/v1/auth/login`,data)
      dispatch({
        type: LOGIN_USER,
        payload: response,
        loading:true,
      });
    } catch (error) {
      dispatch({
        type: CREATE_NEW_USER,
        payload: error.response,
      });
    }
  };

  export const getLoggedUser = () => async (dispatch) => {
    try {
  
      const response = await useGetDataToken(`/api/v1/users/getMe`)
      dispatch({
        type: GET_CURRENT_USER,
        payload: response,
        loading:true,
      });
    } catch (error) {
      dispatch({
        type: GET_CURRENT_USER        ,
        payload: error.response,
      });
    }
  };


  ////
  export const forgetPassword = (data) => async (dispatch) => {
    try {
  
      const response = await UseInsertData(`/api/v1/auth/forgotPasswords`,data)
      dispatch({
        type: FORGET_PASSWORD,
        payload: response,
        loading:true,
      });
    } catch (error) {
      dispatch({
        type: GET_CURRENT_USER,
        payload: error.response,
      });
    }
  };