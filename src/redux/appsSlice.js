import { createSlice } from "@reduxjs/toolkit";

export const appsOpenedSlice = createSlice({
    name: "apps",
    initialState:{
        mycomputer: false,
        terminal: false,
        store: false,
        bloc: false
    },
    reducers:{
        openApp : (state, action)=>{
            const app = action.payload.app;
            state[app] = true;
        },
        closeApp : (state, action)=>{
            const app = action.payload.app;
            state[app] = false;
        },
        addApp : (state, action)=>{
            const app = action.payload.app;
            state[app] = false;
        }
    }
});

export const {openApp, closeApp, addApp} = appsOpenedSlice.actions;

export default appsOpenedSlice.reducer;