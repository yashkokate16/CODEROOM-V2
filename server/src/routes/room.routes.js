import express from "express";
import * as roomController from "../controller/room.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

let roomRouter = express.Router();



roomRouter.post("/create",authMiddleware, roomController.createRoomController);
roomRouter.post("/join",authMiddleware, roomController.joinRoomController);
roomRouter.get("/:roomCode",authMiddleware, roomController.getRoomController);
roomRouter.put("/:roomCode/code", authMiddleware,roomController.updateRoomCodeController);



export default roomRouter;