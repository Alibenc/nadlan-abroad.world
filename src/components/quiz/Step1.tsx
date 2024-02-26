import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegionForm, setStep } from "../../redux/quizReducer";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryLove from "./../../images/henry-love.png";

function requireValidate(value: string) {
  let error;
  if (!value) {
    error = ".לא ציינת באיזה מדינה נמצאת דירת חלומותיך";
  }
  return error;
}

const FirstStep = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative w-full h-full">
      <div className="w-full flex flex-col items-center md:text-lg text-md text-center">
        <h1>מה מדינה, בו היית רוצה לרכוש נכס</h1>
        <img
          className="md:w-60 md:h-60 w-36 h-36"
          src={henryLove}
          alt="henry-image2"
        />
      </div>
      <div>
        <Formik
          initialValues={{
            regions: "",
          }}
          onSubmit={(values: any) => {
            dispatch<any>(setRegionForm(values.regions));
            dispatch<any>(setStep(2));
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <div className={styles.inputWrapper}>
                <Field
                  validate={requireValidate}
                  className="text-right border-b border-black md:text-lg text-md font-extralight p-2.5 resize-none w-full focus:outline-none"
                  name="regions"
                  component="input"
                />
              </div>
              <div className="text-regal-red md:text-lg text-md text-center">
                {errors.regions && touched.regions && (
                  <div>{errors.regions}</div>
                )}
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  className={styles.backButton}
                  onClick={() => dispatch<any>(setStep(0))}
                >
                  <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                  חזור
                </button>
                <button className={styles.button} type="submit">
                  להמשיך
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FirstStep;
