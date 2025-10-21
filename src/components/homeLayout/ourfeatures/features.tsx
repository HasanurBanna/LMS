import Image from "next/image";
import EvenyImage from "@/app/assets/featuresimage/evenyhoward.png";
import TamraraImage from "@/app/assets/featuresimage/tamaraclarke.png";
import AdamImage from "@/app/assets/featuresimage/levin.png";
import HumbertImage from "@/app/assets/featuresimage/humbertholland.png";
import PatriciaImage from "@/app/assets/featuresimage/patriciamendoza.png";
import Link from "next/link";
import { TbAntennaBars5 } from "react-icons/tb";
import { MdAddIcCall, MdGroups } from "react-icons/md";
import { HiSquares2X2 } from "react-icons/hi2";
import { IoCopy } from "react-icons/io5";

const Features = () => {
  return (
    <>
      <div className="px-15 py-15">
        <div className="flex flex-col justify-center">
          <div className="mb-10 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">
              <span className="text-[#2F327D]">Our</span>{" "}
              <span className="text-[#00CBB8]">Features</span>
            </h1>
            <p className="text-xl text-gray-400">
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>

          <section className="grid grid-cols-3 gap-6 mx-auto">
            <div className="col-span-3 lg:col-span-2 flex justify-center items-center">
              {/* Meating section */}
              <div className="relative bg-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-[35px] before:bg-gray-200 before:rounded-tl-2xl before:rounded-tr-2xl w-[780px] h-[480px] mx-auto grid grid-cols-3 gap-2 pl-5 py-10 justify-center items-center rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.15)]">
                {/* part1 image */}
                <div className="w-[255px] h-[246px] rounded-2xl overflow-hidden">
                  <Image
                    src={EvenyImage}
                    alt="Image..."
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* part2 image */}
                <div className="flex flex-col justify-center items-center gap-10">
                  <div className="w-[166px] h-[160px] overflow-hidden rounded-2xl">
                    <Image
                      src={TamraraImage}
                      alt="Image..."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[166px] h-[160px] overflow-hidden rounded-2xl">
                    <Image
                      src={HumbertImage}
                      alt="Image..."
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* part3 image */}
                <div className="flex flex-col justify-center items-center gap-10">
                  <div className="w-[202px] h-[195px] overflow-hidden rounded-2xl">
                    <Image
                      src={AdamImage}
                      alt="Image..."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[202px] h-[195px] overflow-hidden rounded-2xl">
                    <Image
                      src={PatriciaImage}
                      alt="Image..."
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Information section */}
            <div className="flex flex-col justify-center items-center space-y-10 col-span-3 lg:col-span-1">
              {/* interface */}
              <div>
                <h1 className="text-[#2F327D] text-4xl">
                  A <span className="text-[#00CBB8]">user interface</span>{" "}
                  designed for the classroom
                </h1>
              </div>
              {/* icon and information */}
              <div className="flex flex-col justify-center items-center gap-16">
                <div className="flex justify-center items-center gap-4 text-2xl">
                  <div>
                    <HiSquares2X2 className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)] w-10 h-10 p-2 rounded-full" />
                  </div>
                  <div>
                    <p className="text-gray-400">{`Teachers don't get lost in the grid view and have a dedicated podium space.`}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 text-2xl">
                  <div>
                    <IoCopy className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)] w-10 h-10 p-2 rounded-full" />
                  </div>
                  <div>
                    <p className="text-gray-400">{`TA's and presenters can be moved to the front of the class.`}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 text-2xl">
                  <div>
                    <MdGroups className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)] w-10 h-10 p-2 rounded-full" />
                  </div>
                  <div>
                    <p className="text-gray-400">{`Teachers can easily see all students and class data at one time.`}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Features;
