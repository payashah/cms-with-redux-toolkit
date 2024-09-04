import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Store/StoreUsers"



export default configureStore({
    reducer: {
        Users: usersReducer
    }
})