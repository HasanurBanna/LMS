import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <>
      <div>
        <h1>
          <span>Our</span> <span>Features</span>
        </h1>
        <p>
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <section>
          <div>
            <div>
              <div>
                <Image
                  src={"/"}
                  alt="Image..."
                  width={700}
                  height={700}
                  className="rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
