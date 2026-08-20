import express from "express";
import { executeCodeController } from "../controller/code.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const codeRouter = express.Router();


codeRouter.post("/test", (req, res) => {
    res.json({
        success: true,
        message: "Code route is working"
    });
});

codeRouter.post("/execute",authMiddleware, executeCodeController);

export default codeRouter;