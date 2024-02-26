import React from "react";
import real from "./../../images/real.jpeg";
import sign from "./../../images/sign.png";
import diploma from "./../../images/diploma.png";
import logo from "./../../images/vert-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Ender = () => {
  return (
    <section className="relative pb-10 pt-24 bg-pastel-grey">
      <div id="about" className="absolute -top-28"></div>
      <div className="container mx-auto px-10 flex justify-center">
        <div className="w-[60%] relative h-[850px] overflow-hidden">
          <div className="w-[55%] absolute bottom-0">
            <img src={real} alt="about-image" />
          </div>
          <div className="w-1/2 bg-white p-5 text-center text-lg absolute right-10 shadow-2xl">
            <h1 className="font-bold pb-5">
              Александров Александр Александрович
            </h1>
            <ul className="list-disc text-left px-5">
              <li>Главный по отделу продаж с 2005 года</li>
              <li>Главный по маркетингу с 2005 года</li>
              <li>Специалист со стажем более 2005 лет</li>
              <li>Два высших образования</li>
            </ul>
            <p className="pt-5 italic text-left">
              «Недвижимость в рекламе не нуждается!»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ender;
