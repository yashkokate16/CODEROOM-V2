import { executeJavaScript } from "../services/codeExecution.service.js"

export const executeCodeController = async (req, res) => {

    try {

        const { code, language } = req.body;

        if (!code || typeof code !== "string") {
            return res.status(400).json({
                success: false,
                message: "Code is required",
            });
        }

        if (language !== "javascript") {
            return res.status(400).json({
                success: false,
                message: "This language is not supported yet",
            });
        }

        const result = await executeJavaScript(code);

        return res.status(200).json(result);

    } catch (error) {

        console.error("Code execution error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to execute code",
        });
    }
};
