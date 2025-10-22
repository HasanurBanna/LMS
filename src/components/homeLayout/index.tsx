import Hero from "./hero/hero";
import SuccessSection from "./successSection/success";
import Cloudsoftware from "./cloudsoftware/cloudsoftware";
import Totcsection from "./totcsection/totcsection";
import Physicalclassrom from "./physicalClassroom/physicalclassrom";
import Features from "./ourfeatures/features";
import Teacherssection from "./teachers/teacherssection";

const HomeIndex = () => {
  return (
    <>
      <div>
        <Hero />
        <SuccessSection />
        <Cloudsoftware />
        <Totcsection />
        <Physicalclassrom />
        <Features />
        <Teacherssection />
      </div>
    </>
  );
};

export default HomeIndex;
