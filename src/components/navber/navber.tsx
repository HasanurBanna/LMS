"use client";

import Logo from "@/components/logo/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosMoon, IoMdClose, IoMdMenu, IoMdSunny } from "react-icons/io";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isSticky, setIsSticky] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Scroll logic for sticky + smoth hide/show
  useEffect(() => {
    const handlScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll === 0) {
        setIsSticky(false);
        setShowNav(true);
      } else if (currentScroll < lastScroll) {
        setIsSticky(true);
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handlScroll);
    return () => window.removeEventListener("scroll", handlScroll);
  }, [lastScroll]);

  // Theme detection
  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    const systemtheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (saveTheme) {
      setTheme(saveTheme);
    } else if (systemtheme) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // NavItems
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "#" },
    { name: "Careers", path: "#" },
    { name: "Blog", path: "#" },
    { name: "About Us", path: "#" },
  ];

  return (
    <>
      <nav
        className={`bg-bgsecondary dark:bg-bgdark px-15 py-1 transition-all duration-900 ease-in-out transform
          ${isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"}
          ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
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
            {/* Dark Mode Button */}
            <button
              onClick={themeToggle}
              className="w-8 h-8 dark:text-black text-white bg-gray-400 dark:bg-white rounded-full flex justify-center items-center"
            >
              {theme === "dark" ? <IoMdSunny /> : <IoIosMoon />}
            </button>
          </div>

          {/* Toggle Button */}
          <div className="md:hidden flex justify-center items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-txcolor"
            >
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
            <button
              onClick={themeToggle}
              className="w-6 h-6 p-1 dark:text-black text-white bg-gray-400 dark:bg-white rounded-full flex justify-center items-center"
            >
              {theme === "dark" ? <IoMdSunny /> : <IoIosMoon />}
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
