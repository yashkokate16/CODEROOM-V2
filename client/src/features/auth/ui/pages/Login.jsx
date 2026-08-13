import { User, Lock } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onLoginSubmit,
    navigate,
  } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d151b] overflow-hidden relative">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0d151b]" />

      {/* Brick Wall */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.25) 1px,
              transparent 1px
            ),
            linear-gradient(
              to right,
              rgba(0,0,0,0.25) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "100% 45px, 90px 100%",
        }}
      />

      {/* Blue glow */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[650px] h-[500px] bg-blue-700/30 blur-[120px] rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 w-[700px] max-w-[90%]">

        {/* Top light */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">

          <div className="w-32 h-10 bg-[#222a31] rounded-t-lg shadow-2xl" />

          <div className="w-20 h-6 bg-[#ddd] mx-auto -mt-1 blur-[2px] shadow-[0_10px_40px_20px_rgba(255,255,255,0.5)]" />

        </div>

        {/* Login Card */}
        <div
          className="
            relative
            mx-auto
            w-[450px]
            max-w-full
            rounded-2xl
            border border-white/20
            bg-white/15
            backdrop-blur-xl
            shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            px-10
            py-10
          "
        >

          {/* CodeRoom Logo */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-white tracking-wide">
              Code<span className="text-blue-400">Room</span>
            </h1>

            <p className="text-gray-300 text-sm mt-2">
              Collaborate. Code. Create.
            </p>

          </div>

          {/* Login Heading */}
          <h2 className="text-white text-3xl font-semibold text-center mb-8">
            Login
          </h2>

          <form
            onSubmit={handleSubmit(onLoginSubmit)}
            className="space-y-5"
             autoComplete="off"
          >

            {/* Email */}
            <div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  border
                  border-white/30
                  rounded-full
                  px-5
                  py-3
                  bg-white/10
                  focus-within:border-blue-400
                  focus-within:bg-white/15
                  transition
                "
              >

                <User size={20} className="text-white/80" />

                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-white
                    autofill:bg-transparent
                  "
                />

              </div>

              {errors.email && (
                <p className="text-red-400 text-sm mt-2 ml-5">
                  {errors.email.message}
                </p>
              )}

            </div>

            {/* Password */}
            <div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  border
                  border-white/30
                  rounded-full
                  px-5
                  py-3
                  bg-white/10
                  focus-within:border-blue-400
                  focus-within:bg-white/15
                  transition
                "
              >

                <Lock size={20} className="text-white/80" />

                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-white
                    autofill:bg-transparent
                  "
                />

              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-2 ml-5">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm px-2">

              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">

                <input
                  type="checkbox"
                  className="accent-blue-500"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-gray-300 hover:text-white transition"
              >
                Forgot password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                py-3
                rounded-full
                bg-white
                text-[#17212b]
                font-semibold
                text-lg
                hover:bg-blue-400
                hover:text-white
                hover:scale-[1.02]
                active:scale-[0.98]
                transition-all
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

          </form>

          {/* Register */}
          <p className="text-center text-gray-300 text-sm mt-7">

            Don't have an account?

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="
                ml-2
                text-white
                font-semibold
                hover:text-blue-400
                hover:underline
                transition
              "
            >
              Register
            </button>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;