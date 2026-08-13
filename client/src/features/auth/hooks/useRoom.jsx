import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {createRoom} from "../state/room.Thunk"
import { useState } from 'react';
import { useSelector } from 'react-redux';


const useRoom = () => {


     const [roomName, setRoomName] = useState("");
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      const { isLoading } = useSelector((state) => state.room);
    
      const handleCreateRoom = async () => {
        if (!roomName.trim()) return;
    
        const result = await dispatch(
          createRoom({
            roomName,
          })
        );
    
        if (createRoom.fulfilled.match(result)) {
          navigate(`/editor/${result.payload.roomCode}`);
        }
      };

     return {
          handleCreateRoom, roomName, setRoomName, isLoading
     } 

}

export default useRoom
