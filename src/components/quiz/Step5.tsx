import { SelectField } from "../../blocks/SelectField";
import { useDispatch } from "react-redux";
import {
  setStep,
  setPrice,
  setValidations,
  setMoneyType,
} from "../../redux/quizReducer";
import "./../../index.css";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import henryV from "./../../images/henry-v.png";
import shekel from "./../../images/shekel.png";
import usd from "./../../images/usd.png";
import euro from "./../../images/euro.png";

const validations = ["חנייה", "מרפסת", "ממד"];

const options = [
  {
    value: "shekel",
    label: (
      <div className="money-wrap flex justify-center items-center space-x-2">
        <p>ILS</p>
        <img src={shekel} alt="ILS" />
      </div>
    ),
  },
  {
    value: "dollar",
    label: (
      <div className="money-wrap flex justify-center items-center space-x-2">
        <p>USD</p>
        <img src={usd} alt="USD" />
      </div>
    ),
  },
  {
    value: "euro",
    label: (
      <div className="money-wrap flex justify-center items-center space-x-2">
        <p>EUR</p>
        <img src={euro} alt="EUR" />
      </div>
    ),
  },
];

function validateNumber(value: string) {
  let error;
  if (!value) {
    error =
      "למה להתבייש? הגדרת התקציב חשובה למטרותינו. לא לדאוג - אני לא אספר לאיש";
  }
  return error;
}

const FourthStep = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full relative ">
      <Formik
        initialValues={{
          vals: [],
          minPrice: "",
          maxPrice: "",
          moneyType: "shekel",
        }}
        onSubmit={(values: any) => {
          dispatch<any>(setPrice([values.minPrice, values.maxPrice]));
          dispatch<any>(setValidations(values.vals));
          dispatch<any>(setMoneyType(values.moneyType));
          dispatch<any>(setStep(7));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className="flex flex-col">
              <h1 className="text-center text-lg mb-5">תקציב</h1>
              <div>
                <div className={styles.priceWrap}>
                  <div className={styles.formPriceWrapper}>
                    <p className={`${styles.formPriceTitle} top-text`}>עד</p>
                    <Field
                      className={`${styles.formPrice} text-right`}
                      name="minPrice"
                      validate={validateNumber}
                    />
                  </div>
                  <div className={styles.formPriceWrapper}>
                    <p className={`${styles.formPriceTitle} top-text`}>מ</p>
                    <Field
                      className={`${styles.formPrice} text-right`}
                      name="maxPrice"
                      validate={validateNumber}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Field
                    name="moneyType"
                    component={SelectField}
                    options={options}
                  />
                </div>
              </div>
              <div className="text-regal-red md:text-lg text-sm text-center ">
                {(errors.maxPrice && touched.maxPrice && (
                  <div>{errors.minPrice}</div>
                )) ||
                  (errors.minPrice && touched.minPrice && (
                    <div>{errors.minPrice}</div>
                  ))}
              </div>
              <div className="flex step5-img">
                <div className="flex__inner w-1/2 flex justify-center">
                  <img
                    className="md:w-60 md:h-60 w-36 h-36"
                    src={henryV}
                    alt="henry-image5"
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(4));
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

export default FourthStep;
