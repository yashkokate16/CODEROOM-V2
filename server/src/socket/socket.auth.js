import * as authUtils from "../utils/auth.utils.js";
import * as userDao from "../dao/user.dao.js";
import * as cookie from "cookie";

export const socketAuthMiddleware = async (socket, next) => {

    try {

        console.log("🔥 Socket middleware called");

        const cookieHeader = socket.handshake.headers.cookie;

        // console.log("🍪 Cookie Header:", cookieHeader);

        if (!cookieHeader) {
            return next(new Error("Access token missing"));
        }

        // Parse cookies
        const cookies = cookie.parseCookie(cookieHeader);

        // console.log("🍪 Cookies:", cookies);

        const accessToken = cookies.accessToken;

        if (!accessToken) {
            return next(new Error("Access token missing"));
        }

        // console.log("🔑 Access token found");

        // Verify JWT
        const decoded =
            await authUtils.verifyAccessToken(accessToken);

        console.log("✅ Token decoded:", decoded);

        // Find user
        const user =
            await userDao.getUserById(decoded.userId);

        if (!user) {
            return next(new Error("User not found"));
        }

        // Attach user to socket
        socket.user = user;

        console.log("✅ Socket authenticated:", user.email);

        next();

    } catch (error) {

        console.error("❌ Socket authentication error:", error);

        next(new Error("Authentication failed"));
    }
};







