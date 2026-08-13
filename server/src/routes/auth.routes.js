import express from "express";
import * as authController from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


let authRouter = express.Router();



authRouter.post("/register", authController.registerController);
authRouter.post("/login", authController.loginController);
authRouter.get("/me", authMiddleware, authController.getUserController);
authRouter.get("/logout", authController.logoutController);


export default authRouter;