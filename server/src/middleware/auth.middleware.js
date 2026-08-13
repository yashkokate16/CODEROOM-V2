import * as authUtils from '../utils/auth.utils.js';




export let authMiddleware = async (req, res, next) =>{

  let accessToken = req.cookies.accessToken;

  if(!accessToken) {
    return res.status(401).json({
        success: false,
        message: "Access token is missing"
    })
  }
  try{
    let decode = authUtils.verifyAccessToken(accessToken);
    req.userId = decode.userId;
    next();
  } catch(error) {
    return res.status(401).json({
        success: false,
        message: "Invalid access token"
    })
  }

}