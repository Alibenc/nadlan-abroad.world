import React from "react";
import { useDispatch } from "react-redux";
import { setPropertyType, setStep } from "../../redux/quizReducer";
import { propertyTypeVariants } from "../../types/types";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryHand from "./../../images/henry-hand.png";

function checkedValidation(values: any) {
  console.log(values);
  let error;
  if (values.length === 0) {
    error = ".נראה לי שכאן יש את הקריטריונים הדרושים";
  }
  return error;
}

const SecondStep = () => {
  const variants: Array<propertyTypeVariants> = [
    { var: "בית" },
    { var: "קוטג" },
    { var: "וילה" },
    { var: "דירה" },
    { var: "דירה עם חצר" },
    { var: "פֶּנטהאוס" },
  ];

  const dispatch = useDispatch();
  return (
    <div className="relative h-full w-full">
      <h1 className="md:text-lg text-sm text-center mb-8">
        יופי! עכשיו נתמקד בסוג הנדל"ן
      </h1>
      <Formik
        initialValues={{
          propertyType: [],
        }}
        onSubmit={(values: any) => {
          dispatch<any>(setPropertyType(values.propertyType));
          dispatch<any>(setStep(4));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className="flex w-full justify-between items-center">
              <div className="flex justify-center w-1/2">
                <div>
                  {variants.map((variant) => (
                    <div>
                      <div className="checkbox__right md:text-lg text-sm flex text-regal-blue">
                        <Field
                          className="mr-5"
                          name="propertyType"
                          type="checkbox"
                          value={variant.var}
                          validate={checkedValidation}
                        />
                        <p className={styles.formCheckboxTitle}>
                          {variant.var}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <img
                  className="md:w-60 md:h-60 w-36 h-36"
                  src={henryHand}
                  alt="henry-image3"
                />
              </div>
            </div>
            <div className="text-regal-red md:text-lg text-sm text-center">
              {errors.propertyType && touched.propertyType && (
                <div>{errors.propertyType}</div>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(2));
                }}
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
  );
};

export default SecondStep;
