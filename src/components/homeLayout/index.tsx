import Hero from "./hero/hero";
import SuccessSection from "./successSection/success";
import Cloudsoftware from "./cloudsoftware/cloudsoftware";
import Totcsection from "./totcsection/totcsection";
import Physicalclassrom from "./physicalClassroom/physicalclassrom";
import Footer from "../footer/footer";

const HomeIndex = () => {
  return (
    <>
      <div>
        <Hero />
        <SuccessSection />
        <Cloudsoftware />
        <Totcsection />
        <Physicalclassrom />
        <Footer />
      </div>
    </>
  );
};

export default HomeIndex;
