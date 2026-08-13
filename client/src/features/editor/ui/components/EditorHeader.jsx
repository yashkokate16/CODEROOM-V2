import { Code2, LogOut, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import socket from "../../../../app/socket/socket";

const EditorHeader = () => {

    const { room } = useSelector((state) => state.room);

    const navigate = useNavigate();

    const { roomCode } = useParams();


    let handleLeaveRoom = () => {
        socket.emit("leaveRoom", {
            roomCode
        }),
        navigate("/home")
    }


    return (
        <header className="h-72px border-b border-zinc-800 bg-zinc-950 px-6 flex items-center justify-between" >

            {/* Left */}
            <div className="flex items-center gap-3">

                <div className="rounded-xl bg-indigo-600 p-2">
                    <Code2
                        className="text-white"
                        size={22}
                    />
                </div>

                <div>

                    <h2 className="text-lg font-semibold text-white">
                        {room?.roomName}
                    </h2>

                    <p className="text-sm text-zinc-400">
                        Room Code : {room?.roomCode}
                    </p>

                </div>

            </div>

            {/* Center */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2">

                <Users size={18} />

                <span className="text-sm text-zinc-300">
                    {room?.participants?.filter(
                        (participant) => participant.isOnline
                    ).length}{" "}
                    Participants
                </span>

            </div>

            {/* Right */}
            <button
                onClick={handleLeaveRoom}
                className="flex items-center gap-2 rounded-xl border border-red-500/40 px-4 py-2 text-red-400 transition hover:bg-red-500/10"
            >

                <LogOut size={18} />

                Leave Room

            </button>

        </header>
    );

}


export default EditorHeader;