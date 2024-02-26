import React from "react";
import { useDispatch } from "react-redux";
import {
  setName,
  setNumber,
  setStep,
  setAddition,
} from "../../redux/quizReducer";
import { Formik, Form, Field } from "formik";
import styles from "./Quiz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryParty from "./../../images/henry-party.png";

function validateName(value: string) {
  let error;
  if (!value) {
    error = "!הצוות שלי זקוק למידע הזה";
  }
  return error;
}

function validateNumber(value: string) {
  let error;
  if (!value) {
    error = "!הצוות שלי זקוק למידע הזה";
  } else if (/^\d+$/.test(value)) {
  } else {
    error = "Вводи свой номер настоящий номер";
  }
  return error;
}

const Result = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative h-full">
      <img
        className="md:w-60 md:h-60 w-36 h-36 absolute md:-left-36 -left-20 md:-top-40 -top-7 z-10"
        src={henryParty}
        alt="henry-image7"
      />
      {/* <img
        style={{ transform: "scale(-1, 1)" }}
        className="md:w-60 md:h-60 w-36 h-36 absolute md:-right-36 -right-20 md:top-36 top-40 z-10"
        src={henryParty}
        alt="henry-image7"
      /> */}
      <h1 className="text-center md:text-lg text-sm px-5 ">
        יופי, כל השאלות מאחורינו. כל מה שנותר הוא להזין שם ומספר טלפון וללחוץ על
        כפתור "שלח תוצאות"! אחרי קבלת הנתונים הצוות שלי יבנה תיק הצעות בהתאם
        להעדפותיך והמומחה שלנו יצור איתך קשר בקרוב
      </h1>
      <Formik
        initialValues={{
          name: "",
          number: "",
          addition: "",
        }}
        onSubmit={(values) => {
          dispatch<any>(setName(values.name));
          dispatch<any>(setNumber(values.number));
          dispatch<any>(setAddition(values.addition));
          dispatch<any>(setStep(8));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className={styles.formBlock}>
              <Field
                className="text-right border-regal-blue border rounded-md w-full md:text-lg text-sm bg-white font-extralight px-3.5 py-2.5 resize-none"
                name="name"
                validate={validateName}
              />
              <span className="top-text absolute sm:text-md text-sm z-0 left-7 -top-2.5 bg-white px-2 text-regal-blue">
                שם
              </span>
              <div className="text-regal-red md:text-lg text-sm text-center">
                {errors.name && touched.name && <div>{errors.name}</div>}
              </div>
            </div>
            <div className={styles.formBlock}>
              <Field
                className="text-right border-regal-blue border rounded-md w-full md:text-lg text-sm bg-white font-extralight px-3.5 py-2.5 resize-none"
                name="number"
                validate={validateNumber}
              />
              <span className="top-text absolute sm:text-md text-sm z-0 left-7 -top-2.5 bg-white px-2 text-regal-blue">
                {" (מספר טלפון (וואטסאפ "}
              </span>
              <div className="text-regal-red md:text-lg text-sm text-center">
                {errors.number && touched.number && <div>{errors.number}</div>}
              </div>
            </div>
            <div className={styles.inputBlock}>
              <Field
                className="text-right border-regal-blue border rounded-md w-full md:text-lg text-sm bg-white font-extralight px-3.5 py-2.5 md:h-24 h-16 resize-none box-border"
                name="addition"
                component="textarea"
              />
              <span className="top-text absolute sm:text-md text-sm z-0 left-7 -top-2.5 bg-white px-2 text-regal-blue">
                מידע נוסף
              </span>
            </div>
            <div className="text-regal-red md:text-lg text-sm text-center">
              {errors.addition && touched.addition && (
                <div>{errors.addition}</div>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(5));
                }}
              >
                <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                חזור
              </button>
              <button className={styles.button} type="submit">
                קבלת מתנה{" "}
                <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Result;
