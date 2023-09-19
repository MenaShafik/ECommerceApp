import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_SAME_PRODUCTS, GET_SPECIFIC_PRODUCTS, UPDATE_PRODUCT } from "../Type";


const initial = {
    products: [],
    allProducts: [],
    specificProduct: [],
    simellerProduct: [],
    deleteProduct: [],
    UpdateProducts:[],
    loading: true,
  };

export const productsReducer = (state = initial, action) => {
    switch (action.type) {
      case CREATE_PRODUCT:
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
        case GET_ALL_PRODUCTS:
          return {
            ...state,
            allProducts: action.payload,
            loading: false,
          };
          case GET_SPECIFIC_PRODUCTS:
            return {
              ...state,
specificProduct: action.payload,
              loading: false,
            };
            case GET_SAME_PRODUCTS:
              return {
...state,
simellerProduct: action.payload,
                loading: false,
              };
              case DELETE_PRODUCT:
                return {
  ...state,
  deleteProduct: action.payload,
                  loading: false,
                };
                case UPDATE_PRODUCT:
                  return {
    ...state,
    UpdateProducts: action.payload,
                    loading: false,
                  };
      case GET_ERROR:
        return {
          loading: true,
          products: action.payload,
        };
      default:
        return state;
    }
  };
  