import React from "react";

const Teacherssection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-15 py-15">
      <div className="flex flex-col justify-center items-center">
        <h1 className="w-[250px] text-2xl font-semibold text-center mb-10">
          <span className="text-[#6BF0A8]">Tools</span>{" "}
          <span className="text-[#2F327D]">For Teachers And Learners</span>
        </h1>
        <p className="w-sm md:w-2xl text-gray-400 text-md md:text-xl">
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>

      {/* <div>
        <div className="w-md h-64 bg-[radial-gradient(#d1d5db_4px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div> */}
    </div>
  );
};

export default Teacherssection;
