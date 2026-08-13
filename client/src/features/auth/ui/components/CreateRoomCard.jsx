import { SquareTerminal } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../../state/room.Thunk"
import useRoom from "../../hooks/useRoom";

const CreateRoomCard = () => {

  let { handleCreateRoom, roomName, setRoomName, isLoading } = useRoom();

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600">
        <SquareTerminal size={28} className="text-white" />
      </div>

      <h2 className="text-2xl font-semibold text-white">
        Create New Room
      </h2>

      <p className="mt-3 text-zinc-400">
        Start a new collaborative coding session with your teammates.
      </p>

      <div className="mt-8">

        <label className="mb-2 block text-sm text-zinc-400">
          Room Name
        </label>

        <input
          type="text"
          name="roomName"
          placeholder="e.g. React Interview Prep"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
        />

      </div>

      <button
        onClick={handleCreateRoom}
        disabled={isLoading}
        className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Creating..." : "Create Room"}
      </button>

    </div>
  );
};

export default CreateRoomCard;