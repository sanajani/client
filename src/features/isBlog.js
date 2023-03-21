import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isblog : false
}

const blogSlicer = createSlice({
    name:"bloging",
    initialState,
    reducers:{
        isthereBlog:(state) => {
            state.isblog = true
        }
    }
})

export const { isthereBlog } = blogSlicer.actions;

export default blogSlicer.reducer