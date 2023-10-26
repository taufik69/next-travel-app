import Image from "next/image";
import BannerLayout from "./CommonComponent/BannerLayout";
import React from "react";

const Camp = () => {
  return (
    <>
      <section className="pt-10">
        <div className="container mx-auto">
          <div className=" mt-10 flex flex-col gap-4 lg:flex lg:gap-6">
            <BannerLayout image={"/campbanner.png"} />

            <div className="lg:w-1/2">
              <Image
                src={"/campbanner2.png"}
                width={2100}
                height={2000}
                className="h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Camp;
