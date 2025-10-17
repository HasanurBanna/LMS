import React from "react";
import { FaCalendarAlt, FaFileInvoiceDollar, FaUsers } from "react-icons/fa";

const Cloudsoftware = () => {
  const features = [
    {
      icon: <FaFileInvoiceDollar />,
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
      coloricon: "bg-[#5B72EE]",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
      coloricon: "bg-[#00CBB8]",
    },
    {
      icon: <FaUsers />,
      title: "customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline's  built-in system helps organize your organization",
      coloricon: "bg-[#29B9E7]",
    },
  ];

  return (
    <>
      <div className="flex justify-center px-15 py-16 ">
        <section className="container text-center">
          {/* All-In-One */}
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl font-semibold">
              <span className="text-[#2F327D]">All-In-One </span>
              <span className="text-[#00CBB8]">Cloud Software</span>
            </h1>
            <p className="max-w-xl text-center text-lg text-gray-500">
              TOTC is one powerful online softwere suite that combines all the
              tools needed to run a successful school or office.
            </p>
          </div>

          {/* card  */}
          <div className="max-w-5xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center bg-white p-6 shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl"
              >
                <div
                  className={`${feature?.coloricon} absolute -top-7 left-0 right-0 p-5 text-white text-3xl rounded-full`}
                >
                  {feature?.icon}
                </div>
                <h1 className="mt-12 text-bgprimary text-2xl mb-4">
                  {feature?.title}
                </h1>
                <p className="text-justify text-gray-400">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Cloudsoftware;
