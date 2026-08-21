import { Link } from "react-router-dom";
import { Code2, LayoutDashboard, UserCircle } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {

  const { user } = useSelector((state) => state.auth);
   let User = user.user


  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center gap-2"
        >
          <div className="rounded-xl bg-indigo-600 p-2">
            <Code2 size={20} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              CodeRoom
            </h1>

            <p className="text-xs text-zinc-400">
              Collaborative Coding
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          {/* <Link
            to="/dashboard"
            className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link> */}

              
          <button className="flex text-white items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 transition hover:border-indigo-500 hover:bg-zinc-900">

            <UserCircle size={22} />

            <span className="md:block text-sm">
              { User?.name}
            </span>

          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;