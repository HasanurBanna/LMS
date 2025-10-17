import Link from "next/link";
import React from "react";

const Physicalclassrom = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-15 py-20 justify-items-center">
          {/* classroom section */}
          <div className="flex flex-col justify-center items-center space-y-8">
            <h1 className="max-w-xl text-3xl font-semibold text-center">
              <span className="text-[#2F327D]">
                Everything you can do in a physical classroom,
              </span>{" "}
              <span className="text-[#00CBB8]">you can do with TOTC</span>
            </h1>
            <p className="max-w-xl text-center">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <Link
              href={"/#"}
              className=" underline text-gray-700 hover:text-[#2F327D]"
            >
              Learn More
            </Link>
          </div>
          {/* video or image section */}
          <div className="relative sm:w-[450px] sm:h-[253px]">
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#23BDEE] rounded-2xl"></div>
            <div className="absolute -right-3 -bottom-3 w-20 h-20 bg-[#33EFA0] rounded-2xl"></div>

            <div className="w-full relative flex justify-center items-center aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/NtHgwL3uubk?si=6A0REnig9bsowEZ1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Physicalclassrom;
