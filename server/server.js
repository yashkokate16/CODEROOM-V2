import app from "./src/app.js";
import env from "./src/config/env.js";
import connectDB from "./src/config/db.js";
import {createServer} from "http";
import { initializeSocketServer } from "./src/socket/socket.server.js";

const server = createServer(app);


const startServer = async () => {
    try {

        await connectDB();
        
        initializeSocketServer(server);


        server.listen(env.PORT,"0.0.0.0", () => {
            console.log(`Server is running on port ${env.PORT}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();