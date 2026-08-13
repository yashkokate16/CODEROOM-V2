import roomModel from "../models/room.model.js";

export let createRoom = async (roomData) =>{
    let room = await roomModel.create(roomData);
    return room;
}


export let getRoomByCode = async (roomCode) => {
    console.log("searching room", roomCode);
    return await roomModel.findOne({roomCode})

    .populate("host", "name email")
    .populate("participants.user", "name email");
}


export let updateRoom = async (roomId, updateData) => {
    return await roomModel.findByIdAndUpdate(roomId, updateData, 
    {new: true});
}


export let saveRoom = async (room) =>{
    return await room.save();
}

export let updateRoomCode = async (roomCode, code) =>{
    return await roomModel.findOneAndUpdate({roomCode},
        {
            $set:{
                code
            }
        }, {new: true});
}


export let updateParticipantSocketId = async (roomCode, userId, socketId) => {
    return await roomModel.findOneAndUpdate(
        { roomCode, "participants.user": userId },
        { $set: { "participants.$.socketId": socketId } },
        { new: true }
    );
};


export let removeParticipant = async (roomCode, userId) => {
    return await roomModel.findOneAndUpdate(
        {
            roomCode,
        },
        {
            $pull:{
                participants:{
                    user:userId,
                }
            }
        },
        {
            new:true,
        }
    )
}