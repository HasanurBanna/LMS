"use client";

import ScrollAnimation from "@/components/scrollanimation/scrollanimation";
import React from "react";

const SuccessSection = () => {
  const stats = [
    { number: "15k", label: "Students" },
    { number: "175%", label: "Total success" },
    { number: "35", label: "Main questions" },
    { number: "26", label: "Chief experts" },
    { number: "16", label: "Years of experience" },
  ];

  return (
    <>
      <div className="flex justify-center px-15 py-10">
        <section className="container text-center space-y-10">
          <ScrollAnimation animation="slide-left">
            <div className="max-w-2xl mx-auto">
              <h1 className="font-semibold text-3xl mb-5">Our Success</h1>
              <p className="flex justify-center items-center text-sm md:text-lg">
                Ornare id fames interdum porttitor nulla turpis etiam. Diam
                vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a
                quis ultrices eu ornare tristique vel nisl orci.{" "}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center">
            {stats.map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-semibold bg-gradient-to-r from-blue-000 via-bgprimary to-bgsecondary bg-clip-text text-transparent">
                  {item?.number}
                </div>
                <div className="text-gray-800 text-lg mt-1">{item?.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SuccessSection;
