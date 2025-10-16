import instructorsImage from "@/app/assets/instractor&student/instractor.png";
import studentsImage from "@/app/assets/instractor&student/student.png";
import Image from "next/image";

const Totcsection = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center px-15 py-16">
        <div className=" text-center mb-10">
          <h1 className="text-2xl font-semibold mb-5">
            <span className="text-[#2F327D] ">What is</span>{" "}
            <span className="text-[#00CBB8]">TOTC</span>
          </h1>
          <p className="text-lg max-w-3xl">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Instructors card */}
          <div className="relative overflow-hidden rounded-xl group">
            <Image
              src={instructorsImage}
              alt="Instructors..."
              width={500}
              height={280}
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-opacity-50 group-hover:opacity-60 transition-all duration-300">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
                <h1 className="text-lg font-bold mb-4">FOR INSTRUCTORS</h1>
                <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ">
                  Start a class today
                </button>
              </div>
            </div>
          </div>
          {/* Students card */}
          <div className="relative overflow-hidden rounded-xl group">
            <Image
              src={studentsImage}
              alt="Instructors..."
              width={500}
              height={280}
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 transition-all duration-300">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
                <h1 className="text-lg font-bold mb-4">FOR INSTRUCTORS</h1>
                <button className="px-6 py-2 rounded-full bg-bgsecondary hover:bg-bgprimary hover:text-white transition-all duration-300 ">
                  Start a class today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Totcsection;
