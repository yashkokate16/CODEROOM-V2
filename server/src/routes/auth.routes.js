import express from "express";
import * as authController from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import passport from "../config/passport.js";
import * as authUtils from "../utils/auth.utils.js";
import env from "../config/env.js";

let authRouter = express.Router();



authRouter.get("/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
    })
)

authRouter.get("/google/callback", 
    passport.authenticate("google",{
       session: false,
       failureRedirect: "/"
    }),
    async(req, res) => {
        try{
            console.log("Google user ", req.user)

            let userId = req.user._id;

            // token genration //

            let accessToken = authUtils.generateAccessToken(userId);
            let refreshToken = authUtils.generateRefreshToken(userId);
       
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 15 * 60 * 1000
            });
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            // redirect to our react app //

            return res.redirect(`${env.CLIENT_URL}/home`);

        } catch(error) {
            console.error("Error during Google authentication:", error);
            return res.redirect("/");
        }
    }
)



authRouter.post("/register", authController.registerController);
authRouter.post("/login", authController.loginController);
authRouter.get("/me", authMiddleware, authController.getUserController);
authRouter.get("/logout", authController.logoutController);
authRouter.post("/refresh", authController.refreshTokenController);


export default authRouter;