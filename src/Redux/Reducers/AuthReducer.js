import {CREATE_NEW_USER, FORGET_PASSWORD, GET_CURRENT_USER, LOGIN_USER} from "../Type";
const initial = {
  createUser: [],
  loginUser: [],
  currentUser: [],
  forgetPassword: [],

  loading: true,
};

export const authReducer = (state = initial, action) => {
  switch (action.type) {

      case CREATE_NEW_USER:
        return {
            createUser: action.payload,
          loading: false,
        };
        case LOGIN_USER:
        return {
          loginUser: action.payload,
          loading: false,
        };
        case GET_CURRENT_USER:
          return {
            ...state,
            currentUser: action.payload,
            loading: false,
          };
          case FORGET_PASSWORD:
            return {
              ...state,
              forgetPassword: action.payload,
              loading: false,
            };
    default:
      return state;
  }
};
