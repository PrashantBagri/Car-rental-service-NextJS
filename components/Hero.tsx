"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x relative">
        <h1 className="hero__title">
          Find, book, rent a car— Anywhere, Anytime.😄
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
     <div className="absolute ">
        <Image
        src={'/Hero__overlay-image.jpg'}
        alt='hero-image'
        fill
        className="w-screen h-screen "
        />
     </div>
    </div>
  );
};

export default Hero;
