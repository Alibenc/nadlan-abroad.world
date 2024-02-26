//@ts-ignore
import video2 from "./../../images/hero2.mp4";
import { useEffect, useState } from "react";
import image from "./../../images/hero-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [showArrow, setShowArrow] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
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

  setTimeout(() => {
    setShowArrow(true);
  }, 50000);

  const [isLoaded1, setIsLoaded1] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [isLoaded3, setIsLoaded3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded1(true);
    }, 1000);
    setTimeout(() => {
      setIsLoaded2(true);
    }, 2000);
    setTimeout(() => {
      setIsLoaded3(true);
    }, 3000);
  }, []);

  return (
    <section className="relative">
      <div className="absolute top-0" id="hero"></div>
      {showArrow && (
        <div className="nav__arrow">
          <span></span>
          <span></span>
          <span></span>
        </div> 
      )}
      <div className="relative">
        {isMobile ? (
          <div
            style={{
              backgroundImage: "url(./../../images/hero-image.jpeg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100vh",
            }}
          >
            <img
              className="absolute left-0 top-0 w-screen h-screen object-cover object-top -z-10"
              src={image}
              alt="hero-image"
            />
            <div className="container relative mx-auto flex items-center h-full drop-shadow-5xl">
              <div className="hero__title-wrap absolute lg:text-8xl md:text-7xl sm:text-6xl text-5xl px-10 font-bold">
                <h1
                  className={
                    isLoaded1
                      ? "text-regal-red opacity-1 translate-x-0 duration-700"
                      : "text-regal-red opacity-0 translate-x-52 "
                  }
                >
                  איך
                  <br/>
                  רוכשים
                </h1>
                <h2
                  className={
                    isLoaded1
                      ? "text-white opacity-1 translate-x-0 duration-700"
                      : "text-white opacity-0 translate-x-52 "
                  }
                >
                  נדל"ן
                </h2>
                <h3
                  className={
                    isLoaded2
                      ? "text-regal-blue opacity-1 translate-x-0 duration-700"
                      : "text-regal-blue opacity-0 translate-x-52 "
                  }
                >
                  בחו'ל
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <video
            className="absolute left-0 top-0 w-screen h-screen object-cover -z-10"
            autoPlay={true}
            playsInline={true}
            muted={true}
            src={video2}
            loop
          ></video>
        )}
      </div>
      <div className="container mx-auto w-full min-h-screen text-white px-10"></div>
    </section>
  );
};

export default Hero;
