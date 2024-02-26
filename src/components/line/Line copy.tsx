import React, { useEffect, useState } from "react";
import "./Update.css"
import LineBlock from "./LineBlock";
import blocksFunc from "./blocks";
import { lineType } from "../../types/types";

const Line = (props: lineType) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [scroll, setScroll] = useState<number>(0);
  const [blocks, setBlocks] = useState(() => {
    return blocksFunc(props.code);
  })
  const [testState, setTestState] = useState(0);
  const lineRef:any = React.createRef();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (lineRef.current) {
      const lineRefTop = lineRef.current.getBoundingClientRect().top;
      if (lineRefTop <= window.innerHeight / 2) {
        setTestState(Math.abs(window.innerHeight / 2 - lineRefTop));
      } else {
        setTestState(-Math.abs(window.innerHeight / 2 - lineRefTop));
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
    //@ts-ignore
    const lineTop = document.querySelector('.line').getBoundingClientRect().top;
    
    if (lineTop) {
      if (lineTop <= window.innerHeight / 2) {
        setTestState(Math.abs(window.innerHeight / 2 - lineTop));
      } else {
        setTestState(-Math.abs(window.innerHeight / 2 - lineTop));
      }
    }
  };

  return (
    <section ref={lineRef} className="line px-10 relative py-20 overflow-hidden" dir="rtl">
      <div className="container mx-auto w-full relative">
        <div className="absolute top-0 h-full w-full flex justify-center overflow-y-hidden">
          <div className="w-3 rounded-full bg-pastel-grey border h-full relative flex justify-center">
            {/* {blocks.map((block:any, index: number) => (
              <div
                className={
                  width >= 1536 && scroll < 3400 + index * 480
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : 1536 > width &&
                      width >= 1280 &&
                      scroll < 3460 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : 1280 > width &&
                      width >= 1024 &&
                      scroll < 3660 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : 1024 > width &&
                      width >= 768 &&
                      scroll < 4000 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : 768 > width && width >= 640 && scroll < 4355 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : width < 640 && scroll < 4400 + index * 485
                    ? "absolute px-7 py-5 bg-pastel-grey  text-regal-red rounded-full duration-200 font-bold"
                    : "absolute px-7 py-5 bg-regal-red  text-white rounded-full duration-200 font-bold"
                }
                style={width >= 1280 ? 
                  { top: `${(index + 1) * 300 + index * 370}px` } :
                  width >= 860 ? 
                  { top: `${(index + 1) * 325 + index * 370}px` } :
                  width >= 768 ?
                  index === 0 ? {top: `${(index + 1) * 400 - 64 }px`} : {top: `${((index + 1) * 400 - 64) + index * 400 }px`} :
                  index === 0 ? {top: `${(index + 1) * 45 }px`} : {top: `${(index + 1) * 400 + index * 120}px`}
                }
              >
                {index + 1}
              </div>
            ))} */}
            <div
              className="w-full rounded-full bg-regal-red"
              style={{
                // height: `${
                //   scroll -
                //   (width >= 1536
                //     ? 3200
                //     : 1536 > width && width >= 1280
                //     ? 3260
                //     : 1280 > width && width >= 1024
                //     ? 3460
                //     : 1024 > width && width >= 768
                //     ? 3800
                //     : 768 >= width && width > 640
                //     ? 4155
                //     : 4200)
                // }px`,
                height: `${
                  testState > 0 ? testState : 0
                }px`,
              }}
            ></div>
          </div>
        </div>
        <div className="space-y-10 cards">
          {/* {blocks.map((block:any, index: number) => (
            <div
              className={
                index % 2 === 0
                  ? width >= 1536 && scroll < 3400 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96 card__wrapper"
                    : 1536 > width &&
                      width >= 1280 &&
                      scroll < 3460 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96 card__wrapper"
                    : 1280 > width &&
                      width >= 1024 &&
                      scroll < 3660 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96 card__wrapper"
                    : 1024 > width &&
                      width >= 768 &&
                      scroll < 4000 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96 card__wrapper"
                    : 768 > width && width >= 640 && scroll < 4355 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96 card__wrapper"
                    : width < 640 && scroll < 4400 + index * 485
                    ? "flex justify-start w-full duration-500 opacity-0 -mr-96 card__wrapper"
                    : "flex justify-start w-full duration-500 card__wrapper"
                  : width >= 1536 && scroll < 3400 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96 card__wrapper"
                  : 1536 > width && width >= 1280 && scroll < 3460 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96 card__wrapper"
                  : 1280 > width && width >= 1024 && scroll < 3660 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96 card__wrapper"
                  : 1024 > width && width >= 768 && scroll < 4000 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96 card__wrapper"
                  : 768 > width && width >= 640 && scroll < 4355 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96 card__wrapper"
                  : width < 640 && scroll < 4400 + index * 485
                  ? "flex justify-end w-full duration-500 opacity-0 mr-96 card__wrapper"
                  : "flex justify-end w-full duration-500 card__wrapper"
              }
            >
              <div className="step__card w-[40%] h-[455px]">
                <LineBlock
                  title={block.title}
                  desc={block.desc}
                  image={block.image}
                />
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Line;
