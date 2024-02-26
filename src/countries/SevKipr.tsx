import React from "react";
import About from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Feedback from "../components/feedback/Feedback";
import Hero1 from "../components/hero/Hero1";
import Interlayer from "../components/interlayer/Interlayer";
import Question from "../components/question/Question";
import Footer from "../components/footer/Footer";
import Content from "../components/content/ContentSevKipr";
import Line from "../components/line/Line";
import slider1 from "./../images/sevkipr/slider-image1.webp";
import slider2 from "./../images/sevkipr/slider-image2.jpg";
import slider3 from "./../images/sevkipr/slider-image3.webp";
import { countryProps } from "../types/types";
import Advantages from "../components/advantages/Advantages";

const SevKipr = (props: countryProps) => {
  return (
    <div>
      <Hero1
        slider1={slider1}
        slider2={slider2}
        slider3={slider3}
        code={props.code}
        text='איך רוכשים נדל"ן בצפון קפריסין '
      />
      <Advantages/>
      <Interlayer />
      <Content />
      <Carousel code={props.code} />
      <Line code={props.code} />
      <Feedback />
      <About />
      <Question />
      <Footer />
    </div>
  );
};

export default SevKipr;
