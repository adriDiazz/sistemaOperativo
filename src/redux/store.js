import { configureStore } from "@reduxjs/toolkit";
import { appsOpenedSlice } from "./appsSlice";
import { downloadedApps } from "./downloadedSlice";


export default configureStore({
    reducer:{
        appsOpened: appsOpenedSlice.reducer,
        downloadedApps: downloadedApps.reducer
    }  
});