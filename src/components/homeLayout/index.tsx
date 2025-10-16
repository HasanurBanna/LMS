import Hero from "./hero/hero";
import SuccessSection from "./successSection/success";
import Cloudsoftware from "./cloudsoftware/cloudsoftware";
import Totcsection from "./totcsection/totcsection";
import Physicalclassrom from "./physicalClassroom/physicalclassrom";

const HomeIndex = () => {
  return (
    <>
      <div>
        <Hero />
        <SuccessSection />
        <Cloudsoftware />
        <Totcsection />
        <Physicalclassrom />
      </div>
    </>
  );
};

export default HomeIndex;
