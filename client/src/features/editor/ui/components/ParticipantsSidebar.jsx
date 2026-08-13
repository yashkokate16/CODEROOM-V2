import { Users } from "lucide-react";
import { useSelector } from "react-redux";

const ParticipantsSidebar = () => {
  const { room } = useSelector((state) => state.room);
  const { user } = useSelector((state) => state.auth);

  return (
    <aside className="h-full border-r border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 p-5">

        <div className="flex items-center gap-2">
          <Users size={20} className="text-indigo-500" />

          <h2 className="text-lg font-semibold text-white">
            Participants
          </h2>
        </div>

        <p className="mt-1 text-sm text-zinc-400">
          {room?.participants?.length} Members
        </p>

      </div>

      <div className="space-y-3 p-4">

        {room?.participants?.map((participant) => {
          const isHost =
            participant.user?._id === room.host._id;

          const isCurrentUser =
            participant.user?._id === user._id;

          return (
            <div
              key={participant.user._id}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-3"
            >
              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-green-500" />

                <div>
                  <p className="text-sm font-medium text-white">
                    {participant.user.name}

                    {isCurrentUser && (
                      <span className="ml-2 text-xs text-zinc-400">
                        (You)
                      </span>
                    )}
                  </p>

                  <p className="text-xs text-zinc-500">
                    {participant.user.email}
                  </p>
                </div>

              </div>

              {isHost && (
                <span className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs text-yellow-400">
                  Host
                </span>
              )}
            </div>
          );
        })}

      </div>
    </aside>
  );
};

export default ParticipantsSidebar;