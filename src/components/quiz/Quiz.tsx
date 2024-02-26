import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Step2 from "./Step2";
import Step3 from "./Step3";
import styles from "./Quiz.module.css";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step1 from "./Step1";
import Result from "./Result";
import Start from "./Start";
import Bonus from "./Bonus";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Sender from "./Sender";
import { QuizPropsType } from "../../types/types";
import DataSended from "../../blocks/DataSended";

// 
import "./Update.css";

const Quiz = (props: QuizPropsType) => {
  const step: number = useSelector((state: RootState) => state.quiz.step);

  return (
    <div className="quiz md:h-[600px] h-[500px] 2xl:w-[1036px] lg:w-[780px] w-screen relative mx-auto flex flex-col items-center bg-white overflow-hidden">
      {
      props.quizType === "question" ? 
        <></>
      :
        <button
          onClick={props.closeModal}
          className="absolute z-10 right-6 top-6"
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl hover:text-regal-red"
          />
        </button>
      }
      
      <div className={styles.progressWrap}>
        <h1 className="md:text-lg sm:text-md text-sm w-5/6 flex justify-center">
          <FontAwesomeIcon
            icon={faClipboard}
            className="pr-4 text-2xl text-regal-blue"
          />
          ענו על השאלון וקבל מאיתנו מתנה
        </h1>
        {step > 0 && step < 7 && <p className={styles.steps}>{step}/5</p>}
        {step > 0 && (
          <div className={styles.progress}>
            <div
              style={{ width: `${(step - 1) * 20}%` }}
              className={styles.progress__inner}
            ></div>
          </div>
        )}
      </div>
      <div className="w-full h-full md:px-10 md:py-10 px-5 py-5">
        {step === 0 && <Start />}
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {step === 7 && <Result />}
        {step === 8 && <Bonus />}
        {step === 9 && <Sender />}
        {step === 10 && <DataSended formType={props.quizType} action={props.closeModal} />}
      </div>
    </div>
  );
};

export default Quiz;
