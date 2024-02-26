import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { setStep } from "../redux/quizReducer";
import { useDispatch } from "react-redux";

const DataSended = ({ action, formType }: { action: any, formType?:string }) => {
  const dispatch = useDispatch();
  setTimeout(() => {
    try {
      action();
    } catch {}
  }, 3000);

  return (
    <div className="flex flex-col items-center justify-center">
      <FontAwesomeIcon
        className="text-9xl text-green-600"
        icon={faCircleCheck}
      />
      <h1 className="text-4xl font-bold my-5">!תודה על פנייתך</h1>
      <p className="text-lg">ביצור עמך קשר בהקדם</p>
      {/* {formType === "feedback" ? 
        <button
          onClick={() => action()}

          className="border border-green-600 w-max text-green-600 px-8 py-4 my-5 flex items-center justify-center rounded-md duration-300 hover:text-white hover:bg-green-600"
        >
          OK!
        </button>
      :
      <></>
      } */}
      <button
        onClick={() => {
          if (formType !== "question") {
            action();
          }
          dispatch<any>(setStep(0))
        }}

        className="border border-green-600 w-max text-green-600 px-8 py-4 my-5 flex items-center justify-center rounded-md duration-300 hover:text-white hover:bg-green-600"
      >
        OK!
      </button>
    </div>
  );
};

export default DataSended;
