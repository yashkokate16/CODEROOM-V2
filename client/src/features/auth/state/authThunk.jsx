import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstance} from "../../../app/config/axiosInstance.jsx";


export let LoginUser = createAsyncThunk("auth/loginUser",
    async (credentials, thunkApi) => {
    try{
        let res = await axiosInstance.post("/api/auth/login", credentials);
        console.log("login api response", res.data.data.user);
        return res.data.data.user;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
    }
)


export let getUser = createAsyncThunk('auth/me',
    async(_, thunkApi)=> {
      try{
        let res = await axiosInstance.get("/api/auth/me")
        console.log("get user api response", res.data.data)
        return res.data.data
      } catch (error) {
        console.log("error in get user api", error)
        return thunkApi.rejectWithValue(error.response.data)
      }
})    