import Image from "next/image";
import React from "react";

const Camp = () => {
  return (
    <>
      <section className="pt-10">
        <div className="container mx-auto">
          <div className="lg:w-10/12 relative">
            <Image
              src={"/campbanner.png"}
              alt="campbanner.png"
              width={1100}
              height={300}
              className="rounded-2xl"
            />
            <div className="bg-[#30AF5B] absolute top-0 left-0 w-[80px] h-[80px] rounded-full">
              <Image
                src={"/map.svg"}
                alt="map.svg"
                width={50}
                height={50}
                className="m-auto mt-[20%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Camp;
