import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import roomRouter from "./routes/room.routes.js";
import aiRouter from "./routes/ai.routes.js";
import cors from "cors";
import env from "./config/env.js";
import passport from "./config/passport.js";

let app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(passport.initialize());


app.use(
    cors({
        origin: env.CLIENT_URL,
        credentials: true
    })
)

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CodeRoom server is running 🚀"
    });
});


app.use("/api/auth", authRouter);

app.use("/api/room", roomRouter);

app.use("/api/ai", aiRouter);



export default app;