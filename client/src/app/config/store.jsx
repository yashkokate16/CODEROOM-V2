import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../../features/auth/state/authSlice"
import roomReducer from "../../features/auth/state/room.Slice"
import editorReducer from "../../features/editor/state/editor.Slice"

export let store = configureStore({
    reducer:{
        auth: authReducer,
        room: roomReducer,
        editor: editorReducer
    }
    
})

