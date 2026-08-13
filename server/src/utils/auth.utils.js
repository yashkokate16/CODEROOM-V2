import jwt from "jsonwebtoken";
import env from "../config/env.js";


export let generateAccessToken = (userId) => {

    let accessToken = jwt.sign({userId}, env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"});
    return accessToken;

}

export let generateRefreshToken = (userId) => {

    let refreshToken = jwt.sign({userId}, env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"});
    return refreshToken;
}


export let verifyAccessToken = (token) => {
    try{
        return jwt.verify(token, env.ACCESS_TOKEN_SECRET);
    } catch(error) {
        throw new Error("Invalid access token");
    }
} 


export let verifyRefreshToken = (token) => {
    try{
        return jwt.verify(token, env.REFRESH_TOKEN_SECRET);
    } catch(error) {
        throw new Error("Invalid refresh token");
}   
}