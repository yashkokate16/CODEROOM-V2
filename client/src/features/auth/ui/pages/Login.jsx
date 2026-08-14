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

          {/* Google Login */}

          {/* Google Login */}
<div className="mt-6">

  {/* Divider */}
  <div className="flex items-center gap-3 mb-5">
    <div className="flex-1 h-px bg-white/20" />
    <span className="text-gray-400 text-sm">OR</span>
    <div className="flex-1 h-px bg-white/20" />
  </div>

  {/* Google Button */}
  <button
    type="button"
    onClick={() => {
      window.location.href = `${import.meta.env.VITE_SERVER_URL}/api/auth/google`;
    }}
    className="
      w-full
      py-3
      rounded-full
      bg-white
      text-gray-800
      font-semibold
      flex
      items-center
      justify-center
      gap-3
      hover:bg-gray-100
      hover:scale-[1.02]
      active:scale-[0.98]
      transition-all
    "
  >
    {/* Google Icon */}
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.805 10.023H12v3.954h5.637c-.243 1.272-.973 2.35-2.073 3.073v2.55h3.36c1.967-1.812 3.103-4.48 3.103-7.577 0-.72-.064-1.413-.222-2z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.805 0 5.16-.93 6.88-2.52l-3.36-2.55c-.93.624-2.117.994-3.52.994-2.71 0-5.01-1.83-5.832-4.292H2.695v2.633A10.39 10.39 0 0 0 12 22z"
        fill="#34A853"
      />
      <path
        d="M6.168 13.632A6.24 6.24 0 0 1 5.84 12c0-.567.098-1.117.328-1.632V7.735H2.695A10.002 10.002 0 0 0 1.667 12c0 1.617.388 3.15 1.028 4.265l3.473-2.633z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.077c1.528 0 2.9.525 3.978 1.553l2.982-2.982C17.155 2.997 14.805 2 12 2a10.39 10.39 0 0 0-9.305 5.735l3.473 2.633C6.99 7.907 9.29 6.077 12 6.077z"
        fill="#EA4335"
      />
    </svg>

    Continue with Google
  </button>

</div>

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