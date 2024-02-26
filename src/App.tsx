import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./anims.css";
import logo1 from "./images/logo1.png";
import { Route, Routes, useLocation } from "react-router-dom";
//@ts-ignore
import Portugal from "./countries/Portugal";
import SevKipr from "./countries/SevKipr";
import Kipr from "./countries/Kipr";
import Greece from "./countries/Greece";
import Tailand from "./countries/Thailand";
import Montenegro from "./countries/Montenegro";
import Spain from "./countries/Spain";
import { NavLink } from "react-router-dom";
import Interlayer from "./components/interlayer/Interlayer";
import Feedback from "./components/feedback/Feedback";
import About from "./components/about/About";
import Question from "./components/question/Question";
import Footer from "./components/footer/Footer";
import Advantages from "./components/advantages/Advantages";

function App() {
  const [scroll, setScroll] = React.useState(0);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const location = useLocation();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  const scrollTop = () => {
    window.scrollTo(window.pageYOffset, 0);
  }

  useEffect(() => {
    scrollTop();
}, [location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width / height < 1.45;

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className="relative">
      {scroll > 900 && (
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollTop();
            }}
            id="arrowUp"
            className="px-6 py-5 rounded-full fixed right-5 bottom-5 bg-regal-blue cursor-pointer z-50"
          >
            <FontAwesomeIcon className="text-white text-xl" icon={faAngleUp} />
          </a>
      )}
      <div>
          <Routes>
            <Route
              path="/countries"
              element={
                <NavLink
                  to="/"
                  className="absolute px-10 text-5xl py-5 left-1/2 top-1/2 bg-pastel-grey"
                >
                  Начать просмотр
                </NavLink>
              }
            />
            <Route
              path="/"
              element={
                <div>
                  {isMobile ? (
                    location.pathname === "/" ? 
                    <div id="header">
                      <Header pathName={location} />
                    </div>
                    :
                    scroll > 200 ? (
                      <div id="header">
                        <Header pathName={location} />
                      </div>
                    ) : (
                      <div className="absolute top-5 right-5">
                        <img className="w-20" src={logo1} alt="logo1"></img>
                      </div>
                    )
                  ) : (
                    <Header pathName={location} />
                  )}
                  <Hero />
                  <Advantages/>
                  <Interlayer/>
                  <Feedback/>
                  <About/>
                  <Question/>
                  <Footer/>
                </div>
              }
            />
            <Route
              path="/portugal"
              element={
                <div>
                  <Header pathName={location} />
                  <Portugal code="pt" />
                </div>
              }
            />
            <Route
              path="/northkipr"
              element={
                <div>
                  <Header pathName={location} />
                  <SevKipr code="ncy" />
                </div>
              }
            />
            <Route
              path="/kipr"
              element={
                <div>
                  <Header pathName={location} />
                  <Kipr code="cy" />
                </div>
              }
            />
            <Route
              path="/greece"
              element={
                <div>
                  <Header pathName={location} />
                  <Greece code="gr" />
                </div>
              }
            />
            <Route
              path="/montenegro"
              element={
                <div>
                  <Header pathName={location} />
                  <Montenegro code="mtng" />
                </div>
              }
            />
            <Route
              path="/tailand"
              element={
                <div>
                  <Header pathName={location} />
                  <Tailand code="th" />
                </div>
              }
            />
            <Route
              path="/spain"
              element={
                <div>
                  <Header pathName={location} />
                  <Spain code="es" />
                </div>
              }
            />
          </Routes>
      </div>
    </div>
  );
}

export default App;
