import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getRoom} from "../../features/auth/state/room.Thunk"




const EditorRoute = () => {

    let { roomCode } = useParams();
    let dispatch = useDispatch();
    let {room, isLoading, error} = useSelector((state) => state.room);


     useEffect(() => {
    if(!room) {
        dispatch(getRoom(roomCode))
    }

  },[dispatch, roomCode])


  if(error){
    return <Navigate to="/home" />
  }




  return <Outlet />
}

export default EditorRoute
