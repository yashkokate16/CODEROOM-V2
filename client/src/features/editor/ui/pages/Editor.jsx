import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import EditorHeader from "../components/EditorHeader";
import ParticipantsSidebar from "../components/ParticipantsSidebar";
import EditorWorkspace from "../components/EditorWorkspace";

import socket from "../../../../app/socket/socket";
import { setRoom } from "../../../auth/state/room.Slice";

import AIPanel from "../../../ai/ui/component/AIPanel";

const Editor = () => {

    const { roomCode } = useParams();

    const { room } = useSelector((state) => state.room);

    const dispatch = useDispatch();

    useEffect(() => {

        console.log("connection socket");

        socket.connect();

        socket.emit("joinRoom", {
            roomCode,
        });

        console.log(
            "join room request sent",
            roomCode
        );

        const handleRoomUpdated = (room) => {

            console.log(
                "room updated event received from server:",
                room
            );

            dispatch(setRoom(room));
        };

        const handleConnect = () => {

            console.log("🔥 Socket connected");

            console.log(
                "Socket ID:",
                socket.id
            );
        };

        const handleConnectError = (error) => {

            console.error(
                "❌ Socket connection error:",
                error.message
            );
        };

        socket.on(
            "connect",
            handleConnect
        );

        socket.on(
            "roomUpdated",
            handleRoomUpdated
        );

        socket.on(
            "connect_error",
            handleConnectError
        );

        return () => {

            socket.off(
                "connect",
                handleConnect
            );

            socket.off(
                "connect_error",
                handleConnectError
            );

            socket.off(
                "roomUpdated",
                handleRoomUpdated
            );

            socket.disconnect();
        };

    }, [roomCode, dispatch]);


    return (
    <div className="flex h-screen flex-col overflow-hidden bg-zinc-950">

        {/* Header */}
        <EditorHeader />

        {/* Main */}
        <div className="grid min-h-0 flex-1 grid-cols-[280px_minmax(0,1fr)_350px]">

            {/* Participants */}
            <div className="min-h-0 overflow-hidden">
                <ParticipantsSidebar />
            </div>

            {/* Editor */}
            <div className="min-h-0 min-w-0 overflow-hidden">
                <EditorWorkspace />
            </div>

            {/* AI */}
            <div className="min-h-0 min-w-0 overflow-hidden">
                <AIPanel />
            </div>

        </div>

    </div>
);
};

export default Editor;