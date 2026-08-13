import useAuth from "../../hooks/useAuth";
import { User, Mail, Lock } from "lucide-react";

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onRegisterSubmit,
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

      {/* Blue Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[650px] h-[550px] bg-blue-700/30 blur-[120px] rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 w-[700px] max-w-[90%]">

        {/* Top Light */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">

          <div className="w-32 h-10 bg-[#222a31] rounded-t-lg shadow-2xl" />

          <div className="w-20 h-6 bg-[#ddd] mx-auto -mt-1 blur-[2px] shadow-[0_10px_40px_20px_rgba(255,255,255,0.5)]" />

        </div>

        {/* Register Card */}
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
            py-9
          "
        >

          {/* Logo */}
          <div className="text-center mb-5">

            <h1 className="text-4xl font-bold text-white tracking-wide">
              Code<span className="text-blue-400">Room</span>
            </h1>

            <p className="text-gray-300 text-sm mt-2">
              Collaborate. Code. Create.
            </p>

          </div>

          {/* Heading */}
          <h2 className="text-white text-3xl font-semibold text-center mb-7">
            Create Account
          </h2>

          <form
            onSubmit={handleSubmit(onRegisterSubmit)}
            className="space-y-4"
          >

            {/* Name */}
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

                <User
                  size={20}
                  className="text-white/80"
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-white
                    placeholder:text-gray-300
                  "
                />

              </div>

              {errors.name && (
                <p className="text-red-400 text-sm mt-1.5 ml-5">
                  {errors.name.message}
                </p>
              )}

            </div>

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

                <Mail
                  size={20}
                  className="text-white/80"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-white
                    placeholder:text-gray-300
                  "
                />

              </div>

              {errors.email && (
                <p className="text-red-400 text-sm mt-1.5 ml-5">
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

                <Lock
                  size={20}
                  className="text-white/80"
                />

                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    text-white
                    placeholder:text-gray-300
                  "
                />

              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-1.5 ml-5">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                py-3
                mt-2
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
              {isSubmitting
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-gray-300 text-sm mt-6">

            Already have an account?

            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                ml-2
                text-white
                font-semibold
                hover:text-blue-400
                hover:underline
                transition
              "
            >
              Login
            </button>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;