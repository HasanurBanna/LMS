import Hero from "./hero/hero";
import SuccessSection from "./successSection/success";
import Cloudsoftware from "./cloudsoftware/cloudsoftware";
import Totcsection from "./totcsection/totcsection";

const HomeIndex = () => {
  return (
    <>
      <div>
        <Hero />
        <SuccessSection />
        <Cloudsoftware />
        <Totcsection />
      </div>
    </>
  );
};

export default HomeIndex;
