import React, { useEffect, useState } from "react";

const Options = ({ options, SetcurrentAnswer }) => {
  const [optionsRender, setOptionsRender] = useState([]);

  useEffect(() => {
    const optionsDefault = options.map((item, index) => (
      <div
        className=" w-full  md:w-1/3  mt-3 mb-3 bg-cyan-400 shadow-slate-700 shadow-md text-3xl hover:bg-slate-100 h-20 rounded-2xl mx-3 flex justify-center items-center cursor-pointer"
        key={index}
        onClick={() => chooseAnswer(index, item)}
      >
        {" "}
        {item}{" "}
      </div>
    ));
    setOptionsRender(optionsDefault);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const chooseAnswer = async (index, answer) => {
    const optionsDefault = options.map((item, ind) => {
      const classh =
        index !== ind
          ? "w-full md:w-1/3  mt-3 mb-3 bg-cyan-400 shadow-slate-700 shadow-md text-3xl hover:bg-slate-100 h-20 rounded-2xl mx-3 flex justify-center items-center cursor-pointer"
          : "w-full md:w-1/3 bg-cyan-800  mt-3 mb-3  shadow-slate-700 shadow-md text-3xl  h-20 rounded-2xl mx-3 flex justify-center items-center cursor-pointer";
      return (
        <div
          className={classh}
          key={ind}
          onClick={(e) => chooseAnswer(ind, item)}
        >
          {" "}
          {item}{" "}
        </div>
      );
    });
    setOptionsRender(optionsDefault);
    SetcurrentAnswer(answer);
  };

  return (
    <div className="w-full md:p-10 px-2 flex flex-col md:flex-row md:/flex-wrap md:justify-center items-center">
      {optionsRender}
    </div>
  );
};
export default Options;
