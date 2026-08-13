import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  joinRoom} from "../state/room.Thunk"


const useJoinRoom = () => {

    const [roomCode, setRoomCode] = useState("");

    let dispatch = useDispatch();
    let navigate = useNavigate();

 let handleJoinRoom = async () => {
    // if (!roomCode.trim()) return;

    const result = await dispatch(
        joinRoom({
            roomCode,
        })
    );

    if (joinRoom.fulfilled.match(result)) {
        navigate(`/editor/${result.payload.roomCode}`);
    }  
}

 return {
        handleJoinRoom, roomCode, setRoomCode
    }
}

export default useJoinRoom
