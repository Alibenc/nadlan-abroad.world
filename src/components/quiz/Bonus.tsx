import React from "react";
import henryEye from "./../../images/henry-eye.png";
import styles from "./Quiz.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { setStep, setEmail } from "../../redux/quizReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Bonus = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full relative">
      <h1 className="text-center md:text-lg text-sm">
        אני מעריך את הזמן שהקדשת לשאלון הצנוע שלי, אי לכך הכנתי עבורך מתנה קטנה:
        עליך רק להזין את כתובת הדואר האלקטרוני ואני אעביר לחבריי לעבודה הוראה
        ליידע אותך על כל פרויקט חדש. זה יאפשר לך להיות בין הראשונים שיקבלו מידע
        אודות הנכסים החדשים בבסיס המידע שלנו ולבחור את האפשרות המתאימה לך ביותר
      </h1>
      <div className="w-full flex justify-center">
        <img
          className="md:w-60 md:h-60 w-36 h-36"
          src={henryEye}
          alt="henry-image8"
        />
      </div>
      <Formik
        initialValues={{
          email: [],
        }}
        onSubmit={(values: any) => {
          dispatch<any>(setEmail(values.email));
          dispatch<any>(setStep(9));
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className="flex w-full justify-between items-center">
              <div className={styles.inputWrapper}>
                <Field
                  className="text-right border-b border-black md:text-lg md:-mt-10 -mt-5 text-md font-extralight p-2.5 resize-none w-full focus:outline-none"
                  name="email"
                  placeholder="האימייל שלך"
                />
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => {
                  dispatch<any>(setStep(7));
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

export default Bonus;
