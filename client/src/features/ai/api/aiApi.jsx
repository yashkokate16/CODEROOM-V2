import { axiosInstance } from "../../../app/config/axiosInstance";

export let generateCode = async (prompt) =>{
    try{
        let res = await axiosInstance.post(`/api/ai/generate-code`, {prompt});
        console.log("generateCode res", res.data.data.code);
        return res.data.data.code;
    } catch(error) {
        console.log("Error generating code:", error);
        throw error;
    }
}
