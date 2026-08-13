import { Sparkles, Code2, Globe } from "lucide-react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { user } = useSelector((state) => state.auth);
   let User = user.user
  return (
    <section className="mb-14">
      <div className="space-y-5">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Welcome back,{" "}
            <span className="text-indigo-500">
              {User?.name || "User"}
            </span>{" "}
            👋
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-400 text-lg">
            Create coding rooms, collaborate with your teammates,
            and build amazing projects together in real time.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">

          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
            <Sparkles size={18} className="text-indigo-500" />
            <span className="text-sm text-zinc-300">
              Real-time Collaboration
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
            <Code2 size={18} className="text-indigo-500" />
            <span className="text-sm text-zinc-300">
              Instant Code Sync
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
            <Globe size={18} className="text-indigo-500" />
            <span className="text-sm text-zinc-300">
              Work from Anywhere
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;