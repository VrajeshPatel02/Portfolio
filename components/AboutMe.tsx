import React from "react";
import { MagicText } from "@/components/ui/magic-text";
import Heading from "@/components/ui/Heading";

const AboutMe = () => {
  return (
    <>
    <section className="py-24 px-8">
      <div className="relative flex flex-col items-center justify-center mt-5 font-sans">
        <Heading badge="about me"/>
        <MagicText
          text={
            "I'm a passionate software engineer and web developer focused on crafting clean, functional, and engaging digital experiences. With expertise in modern web technologies, I help brands and businesses build impactful solutions that blend creativity, performance, and usability."
          }
        />
      </div>
    </section>
    </>
  );
};

export default AboutMe;
