import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="w-sm space-y-4 my-5">
        <h1 className="text-center">Login Your Account</h1>
        <form action="" className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">User Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your User Name"
              className="border-2 border-bgprimary py-2 px-3 rounded-full focus:outline-bgsecondary"
            />
          </div>
          <div className="flex flex-col space-y-2 relative">
            <label htmlFor="name">Password: </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="border-2 border-bgprimary py-2 px-3 rounded-full focus:outline-bgsecondary"
            />
            <div
              onClick={togglePassword}
              className="absolute top-[46px] right-4"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="cursor-pointer"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div>
              <button
                type="button"
                className="text-red-400 hover:underline cursor-pointer"
              >
                Forgot Password
              </button>
            </div>
          </div>
          <div className="flex justify-end items-center mt-10">
            <button
              type="button"
              className="bg-bgprimary cursor-pointer px-20 py-2 rounded-full hover:bg-bgsecondary text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
