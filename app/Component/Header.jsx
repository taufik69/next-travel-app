"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./CommonComponent/Button";
import { FiUsers } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [show, setshow] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", function (e) {
      if (e.target.innerWidth > 1024) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);

  const HandleChangeMenu = () => {
    setshow(!show);
  };

  return (
    <nav className="border-2 py-5 ">
      <div className="mx-auto container">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image src={"/logo.svg"} alt="logo" width={74} height={29} />
            </Link>
          </div>

          {show && (
            <ul className="lg:gap-x-5 font-inter lg:flex bg-gray-500 py-5 w-full text-center text-white top-12 left-0  absolute lg:text-black lg:bg-transparent lg:justify-center lg:top-4">
              <li className="hover:text-green-300 ease-in duration-200">
                <Link href={"/home"}> Home </Link>
              </li>

              <li className="hover:text-green-300 ease-in duration-200">
                <Link href={"/Hilin"}> How Hilink Work? </Link>
              </li>

              <li className="hover:text-green-300 ease-in duration-200">
                <Link href={"/home"}> Services </Link>
              </li>

              <li className="hover:text-green-300 ease-in duration-200">
                <Link href={"/Pricing"}> Pricing </Link>
              </li>

              <li className="hover:text-green-300 ease-in duration-200">
                <Link href={"/Contact"}> Contact Us </Link>
              </li>
            </ul>
          )}

          <Button
            className={
              "px-10 lg:flex gap-x-3 font-inter items-center py-3 rounded-3xl bg-gray-900 text-white hidden"
            }
          >
            <FiUsers className="text-white text-xl" /> Login
          </Button>

          <div
            className="lg:hidden px-7 text-xl cursor-pointer"
            onClick={HandleChangeMenu}
          >
            <FaBars />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
