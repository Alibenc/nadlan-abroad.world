import React, { useEffect, useState } from "react";
import "./Update.css"
import blocksFunc from "./blocks";
import { lineType } from "../../types/types";

const Line = (props: lineType) => {
  const [blocks] = useState<any>(() => {
    return blocksFunc(props.code);
  })
  
  return (
    <section className="line px-10 relative py-20 overflow-hidden" dir="rtl">
      <h3 className="line__title text-center w-full md:text-4xl text-3xl text-regal-blue pb-4">
        {blocks.mainTitle}
      </h3>
      <div className="line__container container mx-auto w-full">
        {blocks.blocks.map((stepObj:any, i:number) => {
          return(
            <div className="line__step">
              <img src={stepObj.image} alt="step img" className="line__img object-cover" />
              <div className="line__content">
                <h4 className="line__title-step xl:text-xl sm:text-lg text-regal-blue my-1 font-bold">
                {i + 1} שלב <br/> {stepObj.title}
                </h4>
                <p className="line__text xl:text-base sm:text-sm ">
                  {stepObj.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Line;
