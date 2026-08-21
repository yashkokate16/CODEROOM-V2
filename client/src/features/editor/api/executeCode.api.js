import { axiosInstance } from "../../../app/config/axiosInstance";

export let executeCode = async (code, language) =>{
    let res = await axiosInstance.post(
        "/api/code/execute", {
            code,
            language
        }
    )
    return res.data;

}
