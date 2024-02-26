import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import cx from "classnames";
import Modal from "react-modal";
import Quiz from "../quiz/Quiz";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/quizReducer";

import "./Update.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "35px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
};
const Hero1 = (props: any) => {
  const [isArrow, setIsArrow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    <img className={styles.image1} src={props.slider1} key="{slider1}"></img>,
    <img className={styles.image2} src={props.slider2} key="{slider2}"></img>,
    <img className={styles.image3} src={props.slider3} key="{slider3}"></img>,
  ];

  setTimeout(() => {
    setIsArrow(true);
  }, 5000);

  props.slider4 &&
    images.push(
      <img className={styles.image4} src={props.slider4} key="{slider4}"></img>
    );
  props.slider5 &&
    images.push(
      <img className={styles.image5} src={props.slider5} key="{slider5}"></img>
    );
  props.slider6 &&
    images.push(
      <img className={styles.image6} src={props.slider6} key="{slider6}"></img>
    );
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current: number) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1;
  const nextImageIndex =
    activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
    dispatch<any>(setStep(0));
  }

  function closeModal() {
    setIsOpen(false);
    dispatch<any>(setStep(0));
  }

  return (
    <section className="hero1 relative">
      <div className="hero1__container container mx-auto w-full min-h-screen text-white px-20">
        <div className={styles.wrapper}>
          <div className={styles.slider}>
            <div
              className={cx(styles.sliderImage, styles.sliderPrevImage)}
              key={prevImageIndex}
            >
              {images[prevImageIndex]}
            </div>
            <div className={styles.sliderImage} key={activeIndex}>
              {images[activeIndex]}
            </div>
            <div
              className={cx(styles.sliderImage, styles.sliderNextImage)}
              key={nextImageIndex}
            >
              {images[nextImageIndex]}
            </div>
          </div>
        </div>
        <div className="hero1__content 2xl:w-1/2 xl:w-2/3 md:w-5/6 xl:text-4xl md:text-left md:text-3xl text-2xl text-center w-full min-h-screen flex flex-col justify-center">
          <div className="hero1__titles">
            <h1 className="hero1__title opacity-1 translate-x-0 duration-700">
              {props.text}
            </h1>
          </div>
          <div className="hero1__btn-wrap">
            <button
              className="text-white bg-regal-red text-lg rounded-md font-bold w-max  px-8 py-4 mt-10 duration-500 hover:-translate-y-1.5 hover:shadow-hero"
              onClick={openModal}
            >
              קבל ייעוץ
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
          >
            <Quiz closeModal={closeModal} />
          </Modal>
        </div>
        {isArrow ? 
          <div className="nav__arrow">
            <span></span>
            <span></span>
            <span></span>
          </div> 
        : 
        <></>}
        
      </div>
    </section>
  );
};
export default Hero1;
