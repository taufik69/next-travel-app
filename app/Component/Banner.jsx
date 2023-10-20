import Image from "next/image";
import React from "react";
import Button from "./CommonComponent/Button";

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
            <div>
              <Button className="p-5 bg-[#30AF5B] font-inter ">
                Download app
              </Button>
            </div>
          </div>

          <div className="sm:w-1/2 flex justify-center md:justify-between items-center flex-col relative">
            <Image
              src={"/pattern.png"}
              alt="pattern.png"
              width={500}
              height={500}
            />
            <div className="w-full mt-20 sm:mt-0 md:w-1/2 lg:w-1/3 rounded-2xl h-auto bg-black p-5  absolute lg:right-[256px] lg:top-[108px] md:right-[189px] sm:top-[100px]">
              <div className="flex font-inter   text-gray-300 justify-between">
                <h3 className="text-lg font-normal ">Location</h3>
                <span>X</span>
              </div>
              <h2 className="text-xl font-bold text-gray-300 font-inter ">
                Aguas Calientes
              </h2>

              <div className="flex text-gray-300 justify-between mt-9">
                <div className="font-inter">
                  <h2>Distance</h2>
                  <p className="font-bold text-xl">173.28 mi</p>
                </div>

                <div>
                  <h2>Elevation</h2>
                  <p className="font-bold text-xl">2.040 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
