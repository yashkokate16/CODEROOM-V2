import express from "express";
import * as aiController from "../controller/ai.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

let aiRouter = express.Router();


aiRouter.post("/generate-code", authMiddleware, aiController.generateCodeController);


export default aiRouter;