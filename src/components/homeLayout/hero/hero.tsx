import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroGirlImage from "@/app/assets/hero/herogirl.png";
import { LuCalendarDays } from "react-icons/lu";
import { SiGoogleanalytics } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section className="relative bg-bgsecondary dark:bg-bgdark lg:h-[500px] px-15 transition-colors duration-900 ease-in-out">
        <div className="absolute bottom-0 left-0 right-0 w-full h-32 z-1">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
            className="dark:fill-bgdark transition-colors duration-900 ease-in-out"
              fill="#ffffff"
              d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
        <div className="relative container mx-auto py-4 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left side */}
          <div className="w-full mx-auto lg:mx-0 mb-16 lg:mb-0 flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h1 className="max-w-xl text-4xl font-bold leading-tight text-txcolor md:text-5xl mx-auto lg:mx-0 text-center lg:text-start">
              <span className="text-txspncolor">Studying</span>{" "}
              <span>Online is now</span> <span>much easier</span>
            </h1>
            <p className="mt-6 text-xl text-txcolor max-w-md mx-auto lg:mx-0 ">
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </p>

            <div className="mt-8 flex flex-col sm:flex-row  gap-4 mx-auto lg:mx-0">
              <Link
                href={"/courses"}
                className="px-6 py-3 text-lg font-semibold text-txcolor bg-bgprimary/50 rounded-full hover:bg-hoverbtn transition-all duration-300"
              >
                Join for free
              </Link>
              <button className="flex items-center justify-center space-x-3">
                <div className="flex justify-center items-center h-12 w-12 bg-white text-bgprimary rounded-full">
                  <FaPlay />
                </div>
                <span className="text-txcolor">watch how it works</span>
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="relative w-full flex justify-center items-center">
            <div className="relative w-72 h-96 overflow-hidden">
              <Image
                src={HeroGirlImage}
                alt="HeroGirlimage..."
                fill
                className="bg-cover overflow-hidden"
              />
            </div>

            {/* Instructor card */}
            <div className="absolute top-10 right-5 bg-white/30 md:bg-white/70 p-4 rounded-xl shadow-md flex flex-col transition-all duration-300">
              <div className="w-58 flex items-center gap-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={HeroGirlImage}
                    alt="Herogirlimage..."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div>
                    <p className="font-medium text-md text-black">
                      User Experience Class
                    </p>
                    <p className="text-gray-700 text-sm">Today at 12.00 PM</p>
                  </div>
                </div>
              </div>
              <div className="max-w-28 px-3 py-1 rounded-full mx-auto mt-2 bg-bgsecondary text-white font-semibold">
                <Link href={"/#"}>Join Now</Link>
              </div>
            </div>

            {/* Assisted Studen */}
            <div className="absolute left-10 bottom-20 transition-all duration-300 bg-white/30 md:bg-white/70 px-3 py-2 flex items-center justify-center gap-3 rounded-lg shadow-2xl">
              <div className="bg-bgsecondary px-1 py-1 text-white text-xl rounded-md">
                <LuCalendarDays />
              </div>
              <div>
                <h3 className="font-semibold font-serif">250k</h3>
                <p>Assisted Student</p>
              </div>
            </div>

            {/* Analytics */}
            <div className="absolute left-30 top-20 px-2 py-2 bg-[#F25471] rounded-lg">
              <div className=" transform scale-x-[-1] bg-white px-2 py-2 rounded-lg text-[#F25471]">
                <SiGoogleanalytics />
              </div>
            </div>

            {/* congrathulation */}
            <div className="absolute bottom-20 right-5 flex items-center justify-center gap-2 transition-all duration-300 bg-white/30 md:bg-white/70 px-3 py-2 rounded-lg">
              <div className="bg-[#F88C3D] text-white px-2 py-2 rounded-lg">
                <MdEmail />
              </div>
              <div>
                <h2 className="font-semibold">Congratulation</h2>
                <p>Your admission completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
