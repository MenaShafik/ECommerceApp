import { combineReducers } from "redux";
import { CategoryReducer } from "./CategoryReducers";
import { BrandReducer } from "./BrandReducer";
import { SubCategoryReducer } from "./SubCategoryReducer";
import { productsReducer } from "./ProductsReducer";
import { authReducer } from "./AuthReducer";

export default combineReducers({
    allCategory: CategoryReducer,
    allBrand: BrandReducer,
subCategory:SubCategoryReducer,
allProduct: productsReducer,
createUser:authReducer,
})