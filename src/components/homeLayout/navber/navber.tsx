"use client";

import Logo from "@/components/logo/logo";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "#" },
    { name: "Careers", path: "#" },
    { name: "Blog", path: "#" },
    { name: "About Us", path: "#" },
  ];

  return (
    <>
      <nav className="bg-bgsecondary px-15 py-1 z-50">
        <div className="w-full mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="items-center">
            <Logo />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex ">
            <ul className=" flex space-x-3">
              {navItems.map((item) => (
                <li
                  key={item?.name}
                  className="px-1 py-1 rounded-md hover:bg-hoverbtn transition-all duration-300 ease-in-out"
                >
                  <Link
                    href={item?.path}
                    className="hover:text-white text-txcolor transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Login & sign Up Button */}
          <div className="hidden md:flex space-x-4">
            <Link href={"/authlogin"}>
              <button
                type="button"
                className="bg-bgprimary cursor-pointer md:px-6 lg:px-10 py-2 rounded-full text-txcolor shadow-md hover:bg-hoverbtn hover:text-black transition-all duration-300 ease-in-out"
              >
                Login
              </button>
            </Link>
            <Link href={"/authlogin"}>
              <button
                type="button"
                className="bg-bgprimary cursor-pointer md:px-5 lg:px-9 py-2 rounded-full hover:bg-hoverbtn text-white hover:text-black shadow-md transition-all duration-300 ease-in-out"
              >
                SignUp
              </button>
            </Link>
          </div>

          {/* Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-txcolor"
            >
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden shadow-inner border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out  ${
            menuOpen
              ? " max-h-[500px] opacity-100 translate-x-0 my-2 py-2"
              : " max-h-0 opacity-0 -translate-x-100"
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li
                key={item?.name}
                onClick={() => setMenuOpen(!menuOpen)}
                className="hover:bg-txcolor text-black"
              >
                <Link
                  href={item?.path}
                  className="hover:text-gray-300 text-txcolor transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile Button */}
          <div className="flex flex-col items-start gap-2 my-1 text-txcolor font-semibold">
            <Link href={"/authlogin"} onClick={() => setMenuOpen(!menuOpen)}>
              <button type="button" className="">
                Login
              </button>
            </Link>
            <Link href={"/authlogin"} onClick={() => setMenuOpen(!menuOpen)}>
              <button type="button" className="">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
