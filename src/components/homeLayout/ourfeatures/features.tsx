import Image from "next/image";
import EvenyImage from "@/app/assets/featuresimage/evenyhoward.png";
import TamraraImage from "@/app/assets/featuresimage/tamaraclarke.png";
import AdamImage from "@/app/assets/featuresimage/levin.png";
import HumbertImage from "@/app/assets/featuresimage/humbertholland.png";
import PatriciaImage from "@/app/assets/featuresimage/patriciamendoza.png";
import Link from "next/link";
import { TbAntennaBars5 } from "react-icons/tb";
import { MdAddIcCall } from "react-icons/md";

const Features = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-15 py-15">
        <div className=" py-10">
          <h1>
            <span>Our</span> <span>Features</span>
          </h1>
          <p>
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-blue-400">
            <div className="bg-red-300 grid grid-flow-col grid-rows-3 gap-2 px-4 py-4">
              <div className="relative self-center flex items-center justify-center w-[250px] h-[250px] row-span-3 ">
                <Image
                  src={EvenyImage}
                  alt="Image..."
                  width={700}
                  height={700}
                  className="rounded-2xl object-cover"
                />
                <div className="absolute left-0 bottom-3 right-0 flex justify-center items-center gap-2 text-white font-semibold">
                  <TbAntennaBars5 className="text-xl" />
                  <Link href={"/#"} className="px-1 bg-blue-500 rounded-md">
                    Instructor
                  </Link>
                  <p>Eveny Howard</p>
                </div>
                <div className="absolute left-0 -bottom-16 right-0 flex justify-center items-center gap-4 py-4 text-white">
                  <Link
                    href={"/#"}
                    className="px-6 py-2 bg-blue-500 rounded-full"
                  >
                    Present
                  </Link>
                  <Link
                    href={"/#"}
                    className="flex justify-center items-center px-6 py-2 gap-2 bg-red-500 rounded-full"
                  >
                    <span>
                      <MdAddIcCall />
                    </span>
                    Call
                  </Link>
                </div>
              </div>
              <div className=" relative row-span-3 w-[166px] flex flex-col items-center justify-between">
                <Image
                  src={TamraraImage}
                  alt="Image..."
                  className="object-cover rounded-2xl absolute left-0 -top-10 right-0"
                />
                <Image
                  src={HumbertImage}
                  alt="Image..."
                  className="object-cover rounded-2xl absolute left-0 -bottom-10 right-0"
                />
              </div>
              <div className="relative w-[200px] bg-amber-500 row-span-3 gap-y-4">
                <Image
                  src={AdamImage}
                  alt="Image..."
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover "
                />

                <Image
                  src={PatriciaImage}
                  alt="Image..."
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover "
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
