import React, { useState } from "react";
import know from "../asset/images/knowledge.png";
import man from "../asset/images/man.png";
import man2 from "../asset/images/man2.png";
import boy2 from "../asset/images/boy2.png";

const GeneralKnowledge = () => {
  const images = [man, man2, boy2];

  const [photo, setPhoto] = useState(0);

  return (
    <div className="flex w-full justify-center  bg-yellow-300 ">
      <div className="flex flex-col w-3/4 justify-center items-center">
        <img className="w-1/6 mt-3 " src={know} alt="Happy" />
        <button className="w-5/6 mt-3 mb-3 bg-cyan-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 h-20 rounded-2xl ">
          General Knowledge
        </button>
        <div className=" flex w-1/6 p-3 justify-center items-center rounded-full bg-slate-400">
          <img
            className="w-full h-full "
            src={images[photo]}
            alt="man"
            onClick={() => {
              setPhoto(Math.floor(Math.random() * images.length));
            }}
          />
        </div>
        <input
          type="text"
          placeholder=" Your Name Here"
          className="h-14 mt-5 mb-5 w-3/6 rounded-2xl text-center"
        />
        <button className="w-3/6 mt-3 mb-3 bg-green-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 h-14 rounded-2xl ">
          Start
        </button>
      </div>
    </div>
  );
};
export default GeneralKnowledge;
