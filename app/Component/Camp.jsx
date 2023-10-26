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
            <div className="flex absolute top-5 left-5 gap-3  ">
              <Image
                src={"/map.svg"}
                alt="camp.png"
                width={10}
                height={10}
                className="p-2 rounded-full bg-[#30AF5B] w-[55px] h-[55px]"
              />
              <div className="font-inter text-white">
                <h1 className="font-semibold text-base ">Putuk Truno Camp</h1>
                <p className="font-normal text-sm">Prigen, Pasuruan</p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 absolute bottom-6 left-5">
              <div className="flex -space-x-4 items-center">
                <Image
                  src={"/person-1.png"}
                  alt="camp.png"
                  width={150}
                  height={150}
                  className=" rounded-full w-[50px] h-[50px]"
                />

                <Image
                  src={"/person-1.png"}
                  alt="camp.png"
                  width={100}
                  height={100}
                  className=" rounded-full w-[55px] h-[55px]"
                />

                <Image
                  src={"/person-1.png"}
                  alt="camp.png"
                  width={100}
                  height={100}
                  className=" rounded-full w-[55px] h-[55px]"
                />

                <Image
                  src={"/person-1.png"}
                  alt="camp.png"
                  width={100}
                  height={100}
                  className=" rounded-full w-[55px] h-[55px]"
                />
              </div>
              <div className="font-inter text-xm font-bold">
                <h1>50+ Joined</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Camp;
