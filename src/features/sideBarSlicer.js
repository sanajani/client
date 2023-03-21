import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarValue: false
}

const sidebarSlicer = createSlice({
    name:"sideopen",
    initialState,
    reducers:{
        sidebar:(state) => {
            state.sidebarValue = !state.sidebarValue
        }
    }
})

export const {sidebar} = sidebarSlicer.actions;

export default sidebarSlicer.reducer