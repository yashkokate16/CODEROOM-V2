import nanoid from "../utils/room.utils.js";
import * as roomDao from "../dao/room.dao.js";


export let createRoomService = async (host, roomName) =>{
    let roomCode = nanoid();

    let room = await roomDao.createRoom({
        roomName,
        roomCode,
        host,
        participants:[
            {
                user: host,
                scoketId: "",
            },
        ],
        // documents: ''
    })
    return room;
}


export let joinRoomService = async (roomCode, userId) => {

    let room = await roomDao.getRoomByCode(roomCode);

    if(!room) {
        throw new Error("Room not found");
    }
    
    let alreadyJoined = room.participants.some(
    (participant) =>
        participant.user &&
        participant.user.toString() === userId.toString()
);

    if(alreadyJoined) {
        throw new Error("User already joined the room");
        return;
    }

    room.participants.push({
        user: userId,
        socketId: "",
        isOnline: true,
        joinedAt: new Date(),
    });

    await roomDao.saveRoom(room);

    return room;
}

export let getRoomService = async (roomCode) => {
    let room = await roomDao.getRoomByCode(roomCode);

    if(!room) { 
        throw new Error("Room not found");
    }
    return room;
}




export let updateParticipantSocketIdService = async (roomCode, userId, socketId) =>{
    return await roomDao.updateParticipantSocketId(roomCode, userId, socketId);
}


export let updateRoomCodeService = async (roomCode, code) => {
     let room = await roomDao.updateRoomCode(roomCode, code);

    if(!room) { 
        throw new Error("Room not found");
    }

    return room;
}


export let leaveRoomService = async (roomCode, userId) =>{
    
    let updatedRoom = await roomDao.removeParticipant(roomCode, userId);

    if(!updatedRoom) {
        throw new Error("Failed to remove participant from room");
    }

    return updatedRoom;
}

