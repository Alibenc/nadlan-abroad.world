import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./Feedback.module.css";
import like from "./../../images/henry-like.png";
import { propertyTypeVariants } from "../../types/types";
import { useDispatch } from "react-redux";
import "./../../anims.css";
import {
  setAddition,
  setName,
  setNumber,
  setPropertyFor,
  setCountry,
} from "../../redux/quizReducer";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { RootState } from "../../redux/store";

function requireValidate(value: string) {
  let error;
  if (!value) {
    error = "Required field";
  }
  return error;
}

const variants: Array<propertyTypeVariants> = [
  { var: "למגורים" },
  { var: "להשקעה" },
  { var: "להשקעה ומגורים" },
];

const Feedback1 = () => {
  const [isSended, setIsSended] = useState(false);
  const [showElement, setShowElement] = React.useState(true);
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.quiz);
  const message = `propertyFor: ${data.propertyFor}, name: ${data.name}, email: ${data.email}, addition: ${data.addition}`;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_upsc13j",
      "template_k9nm0fc",
      e.target,
      "cLVGE7oDmk1YG9Cjm"
    );
    setShowElement(false);
    setIsSended(false);
  };

  return (
    <section className={styles.wrapper}>
      <div className="container relative mx-auto w-full px-10">
        <div id="feedback" className="absolute -top-36"></div>
        <h1 className="md:text-4xl text-3xl w-full text-center pt-10">
          ?איזה נדל"ן אתם מחפשים
        </h1>
        <div className="flex xl:flex-row flex-col h-max md:pt-10 pt-5">
          {isSended ? (
            showElement && (
              <div
                id="send"
                className="flex flex-col justify-center items-center w-full"
              >
                <img src={like} alt="like-henry"></img>
                <p className="mb-5 md:text-2xl text-xl text-center text-regal-blue">
                  !תודה
                </p>
                <p className="mb-5 md:text-2xl text-xl text-center text-regal-red">
                  לחץ על הכפתור "שלח" והמומחה שלנו יצור איתך קשר בקרוב כדי להציג
                  בפניך את האפשרויות הטובות דירות
                </p>
                <form onSubmit={sendEmail}>
                  <textarea name="message" value={message} className="hidden" />
                  <button
                    type="submit"
                    className="border border-regal-blue w-max text-regal-blue px-8 py-4 flex items-center rounded-md duration-300 hover:text-white hover:bg-regal-blue hover:px-16"
                  >
                    שלח
                  </button>
                </form>
              </div>
            )
          ) : (
            <div
              id="form"
              className="w-full flex flex-col xl:text-left text-center items-center"
            >
              <p className="w-full text-2xl sm:pt-0 pt-5">
                צור קשר! אנא השאר פרטים ונחזור אליך בקדם
              </p>
              <Formik
                initialValues={{
                  name: "",
                  number: "",
                  purpose: "",
                  addition: "",
                  country: "",
                }}
                onSubmit={(values: any) => {
                  setIsSended(true);
                  setShowElement(true);
                  dispatch(setName(values.name));
                  dispatch(setNumber(values.number));
                  dispatch(setPropertyFor(values.purpose));
                  dispatch(setAddition(values.addition));
                  dispatch(setCountry(values.country));
                }}
              >
                {({ errors, touched, isValidating }) => (
                  <Form className="w-full">
                    <div className={styles.formBlock}>
                      <div className={styles.inputWrapper}>
                        <Field
                          className={styles.input}
                          name="name"
                          validate={requireValidate}
                          placeholder="שם"
                        />
                      </div>
                      <div className={styles.error}>
                        {errors.name && touched.name && (
                          <div>{errors.name}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <div className={styles.inputWrapper}>
                        <Field
                          className={styles.input}
                          name="number"
                          validate={requireValidate}
                          placeholder="(מספר טלפון (וואטסאפ"
                        />
                      </div>
                      <div className={styles.error}>
                        {errors.number && touched.number && (
                          <div>{errors.number}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <div className={styles.inputWrapper}>
                        <Field
                          className={styles.input}
                          name="country"
                          validate={requireValidate}
                          placeholder="מה מדינה, בו היית רוצה לרכוש נכס"
                        />
                      </div>
                      <div className={styles.error}>
                        {errors.country && touched.country && (
                          <div>{errors.country}</div>
                        )}
                      </div>
                    </div>
                    <div className="pt-5">
                      <h1 className="text-2xl pb-2">?לאיזו מטרה ישמש הנכס</h1>
                      {variants.map((variant) => (
                        <div>
                          <div className="md:text-lg text-sm flex">
                            <Field
                              className="mr-5"
                              name="purpose"
                              type="checkbox"
                              value={variant.var}
                              validate={requireValidate}
                            />
                            <p className={styles.formCheckboxTitle}>
                              {variant.var}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className={styles.error}>
                        {errors.purpose && touched.purpose && (
                          <div>{errors.purpose}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.formBlock}>
                      <h1 className="w-full text-2xl mb-4">מידע נוסף</h1>
                      <p className="w-full mb-7 text-black">
                        {
                          " זה יסייע לנו לבנות את תיק ההצעות האישי האופטימלי (שטח, מחיר, אזור, כמות חדרים, העדפות אחרות) "
                        }
                      </p>
                      <div className={styles.inputBlock}>
                        <Field
                          className={styles.formArea}
                          name="addition"
                          component="textarea"
                          placeholder="מידע נוסף"
                        />
                      </div>
                      <div className={styles.error}>
                        {errors.addition && touched.addition && (
                          <div>{errors.addition}</div>
                        )}
                      </div>
                    </div>
                    <div className={styles.buttonWrapper}>
                      <div className="w-full">
                        <button
                          className="px-6 py-3 border border-regal-blue hover:px-12 duration-300 hover:bg-regal-blue hover:text-white text-regal-blue"
                          type="submit"
                        >
                          להמשיך
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback1;
