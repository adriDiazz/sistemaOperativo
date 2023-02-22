import { configureStore } from "@reduxjs/toolkit";
import { appsOpenedSlice } from "./appsSlice";
import { downloadedApps } from "./downloadedSlice";
import { fileSystemSlice } from "./fileSystem";


export default configureStore({
    reducer:{
        appsOpened: appsOpenedSlice.reducer,
        downloadedApps: downloadedApps.reducer,
        fileSystem : fileSystemSlice.reducer
    }  
});