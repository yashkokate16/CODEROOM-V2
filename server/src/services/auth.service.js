import * as authUtils from "../utils/auth.utils.js";
import * as userDao from "../dao/user.dao.js";

export let registerService = async (name, email, password) => {

    if(!name || !email || !password) {
        throw new Error("All fields are required")
    }
    
    let isUserExist = await userDao.getUserByEmail(email);

    if(isUserExist) {
        throw new Error("User already exists")
    }

    let user = await userDao.createUser(name, email, password);

    let accessToken = await authUtils.generateAccessToken(user._id)
    let refreshToken = await authUtils.generateRefreshToken(user._id)

    return {user, accessToken, refreshToken};


}

export let loginService = async (email, password) => {

    if(!email || !password) {
        throw new Error("All fields are required")
    }

    let user = await userDao.getUserByEmail(email);

    if(!user) {
        throw new Error("User does not exist")
    }

    let isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid) {
        throw new Error("Invalid password")
    }

    let accessToken = await authUtils.generateAccessToken(user._id)
    let refreshToken = await authUtils.generateRefreshToken(user._id)

    return {user, accessToken, refreshToken};
}



export let logoutService = async (refreshToken) => {
   
        if(!refreshToken) {
            throw new Error("Refresh token is missing");
        }

        let decode = authUtils.verifyRefreshToken(refreshToken);

        if(!decode) {
            throw new Error("Invalid refresh token");
        }
        return {
            success: true,
            message: "Logout successful"
    
        }

}