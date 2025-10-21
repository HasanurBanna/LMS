import Hero from "./hero/hero";
import SuccessSection from "./successSection/success";
import Cloudsoftware from "./cloudsoftware/cloudsoftware";
import Totcsection from "./totcsection/totcsection";
import Physicalclassrom from "./physicalClassroom/physicalclassrom";
import Footer from "../footer/footer";
import Features from "./ourfeatures/features";

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
        <Footer />
      </div>
    </>
  );
};

export default HomeIndex;
