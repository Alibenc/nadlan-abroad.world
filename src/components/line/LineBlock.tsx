import React from "react";

const LineBlock = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-5 h-full flex flex-col items-center">
      <img
        className="rounded-xl object-cover w-[80%]"
        src={image}
        alt="image"
      />
      <div>
        <h1 className="xl:text-xl sm:text-lg text-regal-blue my-1 font-bold">
          {title}
        </h1>
        <p className="xl:text-base sm:text-sm text-regal-red">{desc}</p>
      </div>
    </div>
  );
};

export default LineBlock;
