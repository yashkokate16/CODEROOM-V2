import {createSlice} from "@reduxjs/toolkit";
import {LoginUser, getUser} from "./authThunk.jsx";

let authSlice = createSlice({           
    name:'auth',
    initialState:{
        user:null,
        isLoading:false,
        isInitialized: false,

    },
    reducers:{
        setUser:(state, action) =>{
            state.user = action.payload
            state.isLoading = false
        },
        removeUser:(state) =>{
            state.user = null
            state.isLoading = false
        },
    },
    extraReducers:(builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(LoginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
        })
        .addCase(LoginUser.rejected, (state) => {
            state.isLoading = false
        })
        .addCase(getUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isInitialized = true;

        })
        .addCase(getUser.rejected, (state) => {
            state.isLoading = false;
            state.user = null;
            state.isInitialized = true;
        })

    },
    

})


export let {setUser, removeUser} = authSlice.actions;

export default authSlice.reducer;