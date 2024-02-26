import React from "react";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./Quiz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import henryHeart from "./../../images/henry-heart.png";
import { setStep } from "../../redux/quizReducer";
import { QuizPropsType } from "../../types/types";

const Sender = (props: QuizPropsType) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.quiz);
  const message = `regions: ${data.regions}, propertyType: ${data.propertyType}, propertyFor: ${data.propertyFor}, room range: ${data.roomRange} , price: ${data.price}, moneyType: ${data.moneyType} floor range: ${data.floorRange}, name: ${data.name}, email: ${data.email}, number: ${data.number}, validations: ${data.validations}, addition: ${data.addition}`;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ab8yrr2",
      "template_480e2za", 
      e.target,
      "NdvZueLtDPLkHt59P"
    );
    
    dispatch(setStep(10));
  };
  

  return (
    <div className="relative h-full w-full flex flex-col items-center">
      <img
        className="md:w-60 md:h-60 w-36 h-36"
        src={henryHeart}
        alt="henry-image8"
      />
      <h1 className="text-center md:text-lg sm:text-md text-sm">
        תודה! נהניתי מחברתך. אני סומך על חבריי לעבודה – הם מומחים בתחומם וימצאו את נכס חלומותיך בקלות! לחץ על הכפתור "שלח" והמומחה שלנו יצור איתך קשר בקרוב כדי להציג בפניך את האפשרויות הטובות   
      </h1>
      <form
        className="absolute bottom-0 flex w-full justify-center"
        onSubmit={sendEmail}
      >
        <textarea className="hidden" name="message" value={message} />
        <button
          className={styles.button}
          type="submit"
        >
          שלח
          <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
};

export default Sender;
