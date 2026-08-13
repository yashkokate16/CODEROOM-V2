import * as authService from "../services/auth.service.js";
import * as userDao from "../dao/user.dao.js";



export let registerController = async (req, res) => {

    try {

        let { name, email, password } = req.body;

        let {
            user,
            accessToken,
            refreshToken
        } = await authService.registerService(
            name,
            email,
            password
        );

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                user: {
                    name: user.name,
                    id: user._id,
                    email: user.email
                }
            }
        });

    } catch (error) {

        console.error("Register Error:", error);

        if (error.message === "User already exists") {

            return res.status(409).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export let loginController = async (req, res) => {

    try {

        let { email, password } = req.body;

        let {
            user,
            accessToken,
            refreshToken
        } = await authService.loginService(
            email,
            password
        );

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
                user: {
                    name: user.name,
                    id: user._id,
                    email: user.email
                }
            }
        });

    } catch (error) {

        console.error("Login Error:", error);

        if (
            error.message === "User does not exist" ||
            error.message === "Invalid password"
        ) {

            return res.status(401).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export let getUserController = async (req, res) =>{
    try{
        let user = await userDao.getUserById(req.userId);

        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data:{
                user:{
                    name: user.name,
                    id: user._id,
                    email: user.email
                }} 
        })
    } catch(error) {
        if(error.message === "User not found") {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
}

}

export let logoutController = async (req, res) => {
    try{
        let refreshToken = req.cookies.refreshToken;

        let {message } = await authService.logoutService(refreshToken);
        
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful"
        });
    } catch(error) {

        console.error("Logout Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}




