import Image from "next/image";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Devs from "../components/Devs";
import Video from "../components/Video";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-0 lg:px-0 lg:py-24 sm:items-center">
        <div className="space-y-12">
          <div className="place-items-center space-y-4 lg:space-y-1 lg:scale-75 lg:grid lg:grid-cols-4"></div>
          <Hero />
          <Video id="dQw4w9WgXcQ" />
          <Features />
          <Devs />
          <Faqs />
          <Footer />
        </div>
      </div>
    </div>
  );
}
