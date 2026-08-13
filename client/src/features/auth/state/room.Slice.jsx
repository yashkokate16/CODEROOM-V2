import {createSlice} from "@reduxjs/toolkit";
import {createRoom} from "./room.Thunk";
import {joinRoom} from "./room.Thunk";
import {getRoom} from "./room.Thunk";

let roomSlice = createSlice({
    name:"room",
    initialState:{
        room:null,
        isLoading:false,
        error:null,
    },
    reducers:{
         setRoom: (state, action) =>{
            state.room = action.payload;
         },
    },
     extraReducers:(builder) => {
            builder.addCase(createRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.room = action.payload

                state.isLoading = false
            })
            .addCase(createRoom.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload    
            })
            .addCase(joinRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(joinRoom.fulfilled, (state, action) => {
                state.room = action.payload

                state.isLoading = false
            })
            .addCase(joinRoom.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload    
            })
            .addCase(getRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRoom.fulfilled, (state, action) => {
                state.room = action.payload
                state.isLoading = false
            })
            .addCase(getRoom.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload    
            })
            
        }       

})

export let {setRoom} = roomSlice.actions

export default roomSlice.reducer