import React from "react";
import About from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Feedback from "../components/feedback/Feedback";
import Hero1 from "../components/hero/Hero1";
import Interlayer from "../components/interlayer/Interlayer";
import Footer from "../components/footer/Footer";
import Content from "../components/content/ContentPortugal";
import Line from "../components/line/Line";
import slider1 from "./../images/portugal/slider-image1.jpg";
import slider2 from "./../images/portugal/slider-image2.jpg";
import slider3 from "./../images/portugal/slider-image3.jpg";
import slider4 from "./../images/portugal/slider-image4.jpg";
import Question from "../components/question/Question";
import { countryProps } from "../types/types";
import Advantages from "../components/advantages/Advantages";

const Portugal = (props: countryProps) => {
  return (
    <div>
      <Hero1
        slider1={slider1}
        slider2={slider2}
        slider3={slider3}
        slider4={slider4}
        code={props.code}
        text='איך רוכשים נדל"ן בפורטוגל'
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

export default Portugal;
