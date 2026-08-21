import { useSelector } from "react-redux";

const Profile = () => {

     const { user } = useSelector((state) => state.auth);
    let User = user.user

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
                Loading profile...
            </div>
        );
    }

    if (!User) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
                User not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 p-8 text-white">

            <div className="mx-auto max-w-4xl">

                <h1 className="text-3xl font-bold">
                    My Profile
                </h1>

                <p className="mt-2 text-zinc-400">
                    Manage your CodeRoom account.
                </p>

                <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

                    {/* Avatar */}
                    <div className="flex items-center gap-5">

                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold">
                            {User.name?.charAt(0).toUpperCase()}
                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold">
                                {User.name}
                            </h2>

                            <p className="mt-1 text-zinc-400">
                                {User.email}
                            </p>

                        </div>

                    </div>

                    {/* Account Information */}
                    <div className="mt-8 border-t border-zinc-800 pt-6">

                        <h3 className="text-lg font-semibold">
                            Account Information
                        </h3>

                        <div className="mt-5 grid gap-5 sm:grid-cols-2">

                            <div>
                                <p className="text-sm text-zinc-500">
                                    Name
                                </p>

                                <p className="mt-1 text-zinc-200">
                                    {User.name}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-zinc-500">
                                    Email
                                </p>

                                <p className="mt-1 text-zinc-200">
                                    {User.email}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Profile;