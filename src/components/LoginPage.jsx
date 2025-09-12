import React, { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-1g">
      {/* header section */}
      <div>
        <h2 className="text-3xl font-semibold text-center">
          {isLogin ? "Sign In" : "sign Up"}
        </h2>
      </div>
      {/* Tab controls */}
      <div
        className=" relative flex h-12 mb-6 border 
      border-gray-300 rounded-full overflow-hidden"
      >
        <button
          onClick={() => setIsLogin(true)}
          className={`w-1/2 text-lg font-medium transition-all z-10 ${
            isLogin ? "text-white" : "text-black"
          }`}
        >
          Sign In
        </button>

        <button
          onClick={() => setIsLogin(false)}
          className={`w-1/2 text-lg font-medium transition-all z-10 ${
            !isLogin ? "text-white" : "text-black"
          }`}
        >
          Sign Up
        </button>

        {/* sliding of signin signup button */}
        <div
          className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${
            !isLogin ? "left-0" : "left-1/2"
          }`}
        ></div>
      </div>

      {/* form section */}
      <form className="space-y-4">
        {/* signin field */}
        {!isLogin && (
          <input
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500  placeholder-gray-400"
            type="text"
            placeholder="Name"
          />
        )}
        {/* shared inout field */}
        <input
          className="w-full p-3 border-b-2 border-gray-300 outline-none
        focus:border-cyan-500 placeholder-gray-400"
          type="email"
          placeholder="Email address"
          required
        />
        <input
          className="w-full p-3 border-b-2 border-gray-300 outline-none
        focus:border-cyan-500 placeholder-gray-400"
          type="password"
          placeholder="Password"
          required
        />

        {/* signup field */}
        {!isLogin && (
          <input
            className="w-full p-3 border-b-2 border-gray-300 outline-none
        focus:border-cyan-500 placeholder-gray-400"
            type="password"
            placeholder="Confirm Password"
            required
          />
        )}

        {/* forget password field */}
        {isLogin && (
          <div className="text-right">
            <p className="text-cyan-600 hover:underline">Forget Password</p>
          </div>
        )}

        {/* Signin or signout option */}
        <button
          className="w-full p-3 bg-gradient-to-r
         from-blue-700 via-cyan-600
          to-cyan-200 rounded-full text-lg 
          font-medium hover:opacity-90 transition"
        >
          {isLogin ? "Signin" : "Signup"}
        </button>

        {/* switch link */}
        <p className="text-center text-gray-600">
          {!isLogin ? "Don't have an account?" : "Already have an account?"}
          <a
            className="text-cyan-600 hover:underline"
            href="#"
            onClick={(e) => setIsLogin(!isLogin)}
          >
            {isLogin ? "signup Now" : "Signin"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
