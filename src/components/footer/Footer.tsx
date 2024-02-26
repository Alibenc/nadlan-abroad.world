import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whatsapp from "./../../images/whatsapp.png";
import instagram from "./../../images/instagram.png";
import facebook from "./../../images/facebook.png";
import logo from "./../../images/logo.png";
import { SocialType } from "../../types/types";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const options = [
  { value: "/portugal", label: "פּוֹרטוּגָל" },
  { value: "/northkipr", label: "צפון קפריסין" },
  { value: "/kipr", label: "קַפרִיסִין" },
  { value: "/tailand", label: "תאילנד" },
  { value: "/montenegro", label: "מונטנגרו" },
  { value: "/greece", label: "יוון" },
  { value: "/spain", label: "ספרד" },
];

const socials: Array<SocialType> = [
  { alt: "facebook", img: facebook, link: "/" },
  { alt: "instagram", img: instagram, link: "/" },
  {
    alt: "whatsapp",
    img: whatsapp,
    link: "https://wa.me/972586557877?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82",
  },
];

const Footer = () => {
  const navs = [
    { title: "מי אנחנו", anchor: "#about" },
    { title: "חיפוס נכם", anchor: "#objects" },
    { title: "קבל ייעוץ", anchor: "#question" },
  ];

  return (
    <footer className="w-full lg:py-10 py-0">
      <div className="footer__container container mx-auto px-5 flex lg:flex-row flex-col-reverse lg:space-y-0 space-y-10 justify-between items-center w-full h-full">
        <div className="flex flex-col sm:items-start justify-center items-center ">
          <img className="w-40" src={logo} alt="logo" />
          <div className="text-sm sm:text-left text-center text-regal-blue lg:pb-0 pb-8">
            @2023 All Rights Reserved
          </div>
        </div>
        <div className="footer__menu-wrap">
          <ul className="footer__menu flex flex-row space-x-12">
            <li
                className="footer__popup xl:mb-0 mb-3"
              >
                <Popup
                  position="top center"
                  trigger={
                    <h1
                      className="mx-3.5 font-bold px-2.5 2xl:text-xl text-lg py-1 rounded-none uppercase cursor-pointer text-regal-red"
                    >
                      בחר מדינה
                    </h1>
                  }
                  on="hover"
                  closeOnDocumentClick
                  mouseLeaveDelay={300}
                  mouseEnterDelay={0}
                  arrow={false}
                >
                  <div className="flex flex-col space-y-1">
                    {options.map((option) => (
                      <NavLink
                        className="px-3 py-2 hover:bg-regal-blue hover:text-white"
                        to={option.value}
                      >
                        {option.label}
                      </NavLink>
                    ))}
                  </div>
                </Popup>
            </li>
            {navs.map((nav) => (
              <a
                href={nav.anchor}
                className="footer__link uppercase 2xl:text-xl text-lg font-bold text-center text-regal-red hover:text-black cursor-pointer"
              >
                {nav.title}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            {socials.map((social: SocialType) => (
              <a href={social.link}>
                <img className="w-9 mx-3" src={social.img} alt={social.alt} />
              </a>
            ))}
          </div>
          <div className="text-center md:text-md text-sm font-bold text-regal-blue">
            <div className="footer__socials">
              <p>
                <FontAwesomeIcon
                  className="text-regal-red mr-3 mt-2 text-xl"
                  icon={faLocationDot}
                />
                רחי הרצל 20, חיפה
              </p>
              <p>
                <FontAwesomeIcon
                  className="text-regal-red mr-3 mt-2 text-xl"
                  icon={faPhone}
                />
                0586557877
              </p>
              <p>
                <FontAwesomeIcon
                  className="text-regal-red mr-3 mt-2 text-xl"
                  icon={faEnvelope}
                />
                investremaxabroad@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
