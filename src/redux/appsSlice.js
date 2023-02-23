import { createSlice } from "@reduxjs/toolkit";

export const appsOpenedSlice = createSlice({
    name: "apps",
    initialState:{
        mycomputer: false,
        terminal: false,
        store: false,
    },
    reducers:{
        openApp : (state, action)=>{
                
               if (action.payload.app === 'Notepad'){
                
                const app = action.payload.app;
                const content = action.payload.content;
                
                state[app] = {
                    open: true,
                    content 
                }
            }else {
                const app = action.payload.app;
                state[app] = true;
            }

           
        },
        closeApp : (state, action)=>{

            if (action.payload.app === 'Notepad'){
                const app = action.payload.app;
                const content = action.payload.content;
                state[app] = {
                    open: false,
                    content
                }
            }else {
                const app = action.payload.app;
                state[app] = false;
            }
        },
        addApp : (state, action)=>{
            if (action.payload.app === 'Notepad'){
                const app = action.payload.app;
                const content = action.payload.content;
                state[app] = {
                    open: false,
                    content
                }
            }else {
                const app = action.payload.app;
                state[app] = false;
            }
        }
    }
});

export const {openApp, closeApp, addApp} = appsOpenedSlice.actions;

export default appsOpenedSlice.reducer;