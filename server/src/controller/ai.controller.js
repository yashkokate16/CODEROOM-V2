import * as aiService from "../services/ai.service.js";


export let generateCodeController = async (req, res) =>{

    try{
        let {prompt} = req.body;

        if(!prompt) {
            return res.status(400).json({
                success: false,
                message:"Prompt is required"
            });
        }

        let code = await aiService.generateCodeService(prompt);

        return await res.status(200).json({
            success: true,
            message: "Code generated successfully",
            data:{
                code,
            }
    })

} catch(error){
    throw new Error("AI generation error", error)

    return res.status(500).json({
        success:false,
        message:"Failed to generate code"
    })
}
};