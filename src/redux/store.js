import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from  "./feature/authslice";
import userReducer from "./feature/userprofileslice";
import productReducer from "./feature/productslice";
import cartReducer from "./feature/cartslice";
import orderReducer from "./feature/orderslice";
export default configureStore({
    reducer:combineReducers({
        auth:authReducer,
        user:userReducer,
        product:productReducer,
        cart:cartReducer,
        order:orderReducer,
    }),
})