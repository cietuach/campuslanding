import Image from "next/image";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Devs from "../components/Devs";
import Video from "../components/Video";
import Join from "../components/Join";
import Head from "next/head";

export default function Example() {
  return (
    <div className="bg-white">
      <Head>
        <title>Campus Seguro</title>
        <meta
          name="description"
          content="Devs Social es una red social para desarrolladores, donde puedes compartir tus proyectos, tus ideas, tus dudas y mucho más."
        />
        <meta
          name="keywords"
          content="devs social, devs, social, red social, red, desarrolladores, programadores, programacion, programar, proyectos, ideas, dudas, ayuda, ayuda programacion, ayuda programar, ayuda programadores, ayuda desarrolladores, ayuda devs, ayuda devs soc
          "
        />
      </Head>
      <div className="mx-auto max-w-7xl py-12 px- sm:px-0 lg:px-0 lg:py-24 sm:items-center">
        <div className="space-y-12">
          <div className="place-items-center space-y-4 lg:space-y-1 lg:scale-75 lg:grid lg:grid-cols-4"></div>
          <Hero />
          <Video id="HwDCBP9Id40" />
          <Features />
          <Devs />
          <Faqs />
          <Join />
          <Footer />
        </div>
      </div>
    </div>
  );
}
