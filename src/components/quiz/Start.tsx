import React from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../redux/quizReducer";
import styles from "./Quiz.module.css";
import henryHi from "./../../images/henry-hi.png";
import hand from "./../../images/hand.png";

const Start = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full relative h-full">
      <div className="w-full h-max flex justify-center">
        <img
          className="md:w-60 md:h-60 w-36 h-36"
          src={henryHi}
          alt="henry-image1"
        />
        <h1 className="text-right md:text-lg sm:text-md text-sm flex items-center pl-5">
          שלום, שמי אדם, אני העוזר האישי שלך במהלך השאלון הקצרצר הזה. ענה על
          שאלותיי וחבריי לעבודה יבנו עבורך מקבץ הצעות נדל"ן המותאמות לך אישית
        </h1>
      </div>
      <div className="absolute bottom-0 right-0 w-full">
        <p className="absolute md:text-lg sm:text-md text-sm bottom-20 right-0 w-full text-right">
          !לחץ על הכפתור ונתקדם לשאלון
        </p>
        <div className={styles.firstButtonWrapper}>
          <img
            className="md:w-28 md:h-28 w-20 h-20 mr-5 absolute md:-left-36 md:-top-5 -left-24 -top-3"
            src={hand}
            alt="hand-image"
          />
          <div
            className={styles.button}
            onClick={() => dispatch<any>(setStep(1))}
          >
            לענות על השאלות
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
