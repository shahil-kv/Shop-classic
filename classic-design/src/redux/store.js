import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cartRedux'
import userRedux from "./userRedux"
export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userRedux,
    },
})