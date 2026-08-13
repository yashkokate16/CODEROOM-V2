import { Users } from "lucide-react";
import { useState } from "react";
import { joinRoom } from "../../state/room.Thunk";
import useJoinRoom from "../../hooks/useJoinRoom";


const JoinRoomCard = () => {
  // const [roomCode, setRoomCode] = useState("");

  let{ roomCode, setRoomCode, handleJoinRoom } = useJoinRoom()

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-indigo-500">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600">
        <Users className="text-white" size={28} />
      </div>

      <h2 className="text-2xl font-semibold text-white">
        Join Existing Room
      </h2>

      <p className="mt-3 text-zinc-400">
        Enter the room code shared by your teammates.
      </p>

      <input
        type="text"
        placeholder="Enter Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
        className="mt-6 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-indigo-500"
      />

      <button onClick={handleJoinRoom}
        className="mt-5 w-full rounded-xl bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-500"
      >
        Join Room
      </button>
    </div>
  );
};

export default JoinRoomCard;