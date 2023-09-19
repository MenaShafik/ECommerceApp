import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducers from "./Reducers/RootReducers";

const initialState ={}
const Middleware = [thunk]
export const store = createStore(RootReducers,initialState,composeWithDevTools(applyMiddleware(...Middleware)));
