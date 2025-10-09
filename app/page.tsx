import Hero from "@/components/Hero";
import MarqueeText from "@/components/Marquee";
import AboutMe from "@/components/AboutMe";
import MyWork from "@/components/MyWork";
import Speciality from "@/components/Speciality";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeText />
      <AboutMe />
      <MyWork />
      <Speciality />
      <Footer />
    </>
  );
}
