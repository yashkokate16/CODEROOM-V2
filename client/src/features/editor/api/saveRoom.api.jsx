import { axiosInstance } from "../../../app/config/axiosInstance";


export let saveRoom = async (roomCode, code) =>{
    try{
        let res = await axiosInstance.put(`/api/room/${roomCode}/code`, {code});
        console.log("saveRoom res", res.data.data.code);
        return res.data.data;
    } catch(error) {
        console.log("Error saving room:", error);
        throw error;
    }

}