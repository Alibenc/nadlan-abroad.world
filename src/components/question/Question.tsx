import React from "react";
import Quiz from "../quiz/Quiz";

const Question = () => {
  return (
    <section className="bg-pastel-grey relative flex flex-col items-center">
      <div id="question" className="absolute -top-28"></div>
      <div className="container mx-auto w-full h-full text-black">
        <h1 className="md:text-4xl text-3xl w-full text-center py-10 px-10 text-regal-blue">
          !ענו על שאלון וקבלו מבחר הצעות נדל"ן המבוסס על העדפותיכם האישיות
        </h1>
      </div>
      <div className="lg:container relative lg:mx-20 mx-5 flex justify-center pb-10">
        <Quiz quizType="question" />
      </div>
    </section>
  );
};

export default Question;
