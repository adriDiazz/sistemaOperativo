import { createSlice } from "@reduxjs/toolkit";

export const fileSystemSlice = createSlice({
    name: "apps",
    initialState:{
        root:{
            name:'root',
            type:'folder',
            children:[
                {
                    name:'folder1',
                    type:'folder',
                    children:[
                        {
                            name:'file1',
                            type:'file',
                            content:'file1 content'
                        }
                    ]
                },
                {
                    name:'folder2',
                    type:'folder',
                    children:[
                        {
                            name:'file2.txt',
                            type:'file',
                            content:'file1 content'
                        }
                    ]
                },
                {
                    name:'file1.txt',
                    type:'file',
                    content:'file1 content'
                }
            ]
        }
    },
    reducers:{
       createDirectory: (state, action) => {
            const {path, name} = action.payload;
            const pathArray = path.split('/');
             
       }
    }
});

export const {downloadApp, deleteApp} = fileSystemSlice.actions;

export default fileSystemSlice.reducer;