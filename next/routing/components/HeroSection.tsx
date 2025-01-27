import React from "react";
import Image from "next/image";
import dream from "public/dream.avif"
const HeroSection = () => {
  return (
    <div>
      <Image
      src={dream}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
  );
};

export default HeroSection;
