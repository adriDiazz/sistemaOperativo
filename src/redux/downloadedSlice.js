import { createSlice } from "@reduxjs/toolkit";

export const downloadedApps = createSlice({
    name: "apps",
    initialState:[{
        name:'Notepad',
        icon:'bloc.png',
        downloaded : false,
    },
    {
        name:'Paint',
        icon:'paint.png',
        downloaded : false,
    },
    {
        name:'Calendar',
        icon:'calendar.png',
        downloaded : false,
    }],
    reducers:{
        downloadApp : (state, action)=>{
            const app = action.payload.app;
            state = state.map((app2) => {
                if(app === app2.name){
                    app2.downloaded = true;
                }
                return app2;
            });
        },
        deleteApp : (state, action)=>{
            const app = action.payload.app;
            state = state.map((app2) => {
                if(app === app2.name){
                    app2.downloaded = false;
                }
                return app2;
            });
        }
    }
});

export const {downloadApp, deleteApp} = downloadedApps.actions;

export default downloadedApps.reducer;