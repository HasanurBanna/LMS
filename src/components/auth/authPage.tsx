"use client";

import { useState } from "react";
import LoginImage from "@/app/assets/log&regImag/loginimage.png";
import RegisterImage from "@/app/assets/log&regImag/registerimage.png";
import Image from "next/image";
import Login from "./login";
import Register from "./register";

const AuthPage = () => {
  const [islogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="relative h-screen grid grid-cols-1 lg:grid-cols-2 gap-4 bg-bgprimary/60 px-15">
        {/* Login Image */}
        <div className="relative flex items-center justify-center">
          {islogin ? (
            <Image
              src={LoginImage}
              alt="Login"
              width={600}
              height={600}
              className="opacity-20 lg:opacity-100"
            />
          ) : (
            <Image
              src={RegisterImage}
              alt="Register"
              width={600}
              height={600}
              className="opacity-20 lg:opacity-100"
            />
          )}
        </div>
        {/* Login Button */}
        <div className="flex flex-col justify-center items-center absolute top-[50%] left-[50%] right-[50%] bottom-[50%] lg:static">
          <h1 className="text-center text-lg mb-5">Welcome to LMS</h1>
          <div className="bg-bgprimary flex justify-between items-center py-2 px-2 rounded-full">
            <button
              onClick={() => setIsLogin(true)}
              className={`${
                islogin ? "bg-bgsecondary" : ""
              } text-txcolor rounded-full py-2 px-16 cursor-pointer`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`${
                islogin ? "" : "bg-bgsecondary"
              } text-txcolor rounded-full py-2 px-16 cursor-pointer`}
            >
              Register
            </button>
          </div>
          {islogin ? <Login /> : <Register />}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
