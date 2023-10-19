import Image from "next/image";
import React from "react";

export const Metadata = {
  title: "Taufik",
  description: "...",
};
const Banner = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="sm:flex">
          <div className="sm:w-1/2 px-5">
            <Image
              className="lg:-mb-7 ml-[50%] sm:mb-0 mb-3 sm:ml-0"
              src={"/camp.svg"}
              alt="/camp.svg"
              width={50}
              height={50}
            />
            <h1 className=" font-inter text-[20px] md:text-[50px] lg:text-[78px] font-bold">
              Putuk Truno Camp Area
            </h1>
            <p className="lg:w-3/5 font-inter text-md mt-4 text-justify w-full ">
              We want to be on each of your journeys seeking the satisfaction of
              seeing the incorruptible beauty of nature. We can help you on an
              adventure around the world in just one app
            </p>
            <div className="flex gap-x-2 lg:mt-16 mt-5 items-center">
              <div className="flex">
                <Image
                  src={"/star.svg"}
                  alt="star.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/star.svg"}
                  alt="star.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/star.svg"}
                  alt="star.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/star.svg"}
                  alt="star.svg"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/star.svg"}
                  alt="star.svg"
                  height={20}
                  width={20}
                />
              </div>
              <div className="ml-5">
                <p className="md:text-sm font-inter md:font-normal">
                  <span className="md:text-xl lg:inline md:block inline-block  sm:inline-block  font-bold mr-2 md:mr-6 lg:mr-2">
                    {" "}
                    198k
                  </span>
                  Excellent Reviews
                </p>
              </div>
            </div>
          </div>

          <div className="sm:w-1/2 flex justify-center items-center flex-col">
            <Image
              src={"/pattern.png"}
              alt="pattern.png"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
