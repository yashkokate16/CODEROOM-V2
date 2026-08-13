import {createAsyncThunk} from "@reduxjs/toolkit";
import { axiosInstance } from "../../../app/config/axiosInstance"


export let createRoom = createAsyncThunk("room/createRoom",
    async(roomData, thunkAPI) => {
        try{
            console.log("sending....", roomData);
            let res = await axiosInstance.post("/api/room/create", roomData,
             )
             console.log(res.data.data)
             return res.data.data

        } catch (error) {

          return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Something went wrong"

         );
}
})



export let joinRoom = createAsyncThunk("/room/joinRoom",
    async(roomData, thunkAPI) => {
        try{
            console.log("sending....", roomData);
            let res = await axiosInstance.post("/api/room/join", roomData)
             console.log(res.data.data)
             return res.data.data

        } catch (error) {

          return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Something went wrong"

         );
}
})


export let getRoom = createAsyncThunk("room/getRoom",
    async(roomCode, thunkAPI) => {
        try{
            let res = await axiosInstance.get(`/api/room/${roomCode}`)
             console.log("get romm res",res.data.data)
             return res.data.data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(
            error.response?.data?.message || "Something went wrong"
            );
        }
    })



