import React from "react";
import { useDispatch } from "react-redux";
import { setPropertyFor, setStep } from "../../redux/quizReducer";
import { propertyTypeVariants } from "../../types/types";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryO from "./../../images/henry-o.png";

function checkedValidation(values: any) {
  console.log(values);
  let error;
  if (values.length === 0) {
    error = ".נראה לי שכאן יש את הקריטריונים הדרושים";
  }
  return error;
}

const SixthStep = () => {
  const variants: Array<propertyTypeVariants> = [
    { var: "למגורים" },
    { var: "להשקעה" },
    { var: "להשקעה ומגורים" },
  ];

  const dispatch = useDispatch();
  return (
    <div className="relative h-full w-full">
      <h1 className=" md:text-lg text-sm text-center mb-8">
        !תגיד לי בסוד - לאיזו מטרה ישמש הנכס? מבטיח לא לגלות לאף אחד
      </h1>
      <Formik
        initialValues={{
          propertyFor: [],
        }}
        onSubmit={(values: any) => {
          dispatch<any>(setPropertyFor(values.propertyFor));
          dispatch<any>(setStep(3));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col items-center w-1/2">
                <div>
                  {variants.map((variant) => (
                    <div>
                      <div className="checkbox__right md:text-lg text-sm flex text-regal-blue">
                        <Field
                          className="mr-5"
                          name="propertyFor"
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
                  src={henryO}
                  alt="henry-image3"
                />
              </div>
            </div>
            <div className="text-regal-red md:text-lg text-sm text-center">
              {errors.propertyFor && touched.propertyFor && (
                <div>{errors.propertyFor}</div>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(1));
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

export default SixthStep;
