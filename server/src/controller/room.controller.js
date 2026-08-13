import * as roomService from "../services/room.service.js";

export let createRoomController = async (req, res) => {
    let {roomName} = req.body;
    let host = req.userId;

    try{
        let room = await roomService.createRoomService(host, roomName);
    
    return res.status(201).json({
        success: true,
        message: "Room created successfully",
        data: room
    })

    } catch(error) {
        console.error("Error creating room:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }

}

export let joinRoomController = async (req, res, next) => {
   try{
    let {roomCode} = req.body;
   let userId = req.userId;
   
   let room = await roomService.joinRoomService(roomCode, userId);

   return res.status(200).json({
       success: true,
       message: "Room joined successfully",
       data: room
   });
   } catch(error) {
    next(error);
   }
}


export let getRoomController = async (req, res) => {

    let {roomCode} = req.params;
    console.log("roomCode", roomCode);

    let room = await roomService.getRoomService(roomCode);
    return res.status(200).json({
        success: true,
        message: "Room fetched successfully",
        data: room
    })
}


export let updateRoomCodeController = async(req, res) => {
    try{
        let {roomCode} = req.params;
    let {code} = req.body;

    let room = await roomService.updateRoomCodeService(
    roomCode, code);

    return res.status(200).json({
        success: true,
        message: "Room code updated successfully",
         data:{
            code: room.code
         }
    })

    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}


