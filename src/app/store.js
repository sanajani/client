import {configureStore} from '@reduxjs/toolkit'
import sideBarReducer from '../features/sideBarSlicer';
import blogSlicer from '../features/isBlog';
import adminLoggedinReducer from '../features/isLogin'

const store = configureStore({
    reducer:{
        isSide: sideBarReducer,
        isBlog: blogSlicer,
        isAdmin: adminLoggedinReducer
    }
})

export default store