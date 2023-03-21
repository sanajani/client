import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isAdminLoggedin: false,
}
const adminLoggedinSlicer = createSlice({
    name:"isadminLogin",
    initialState,
    reducers:{
        isAdminLogin: (state) => {
            state.isAdminLoggedin = true
        }
    }
})

export const {isAdminLogin,increaseLoginUser} = adminLoggedinSlicer.actions;

export default adminLoggedinSlicer.reducer