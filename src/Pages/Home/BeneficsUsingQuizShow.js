import React from "react";
import focus from "../../asset/images/undraw_dev_focus_re_6iwt.svg";
import happy from "../../asset/images/undraw_happy_announcement_re_tsm0.svg";
import Tools from "../../asset/images/undraw_design_tools_-42-tf.svg";
const BeneficsUsingQuizShow = () => {
  return (
    <div className=" flex flex-col mt-9">
      <div className=" flex justify-center items-center w-full">
        <h1 className=" text-2xl md:text-5xl text-yellow-500 mt-12 mb-5 text-center">
          Benefits of having Quizzes with QuizShow!
        </h1>
      </div>

      <div className="justify-center items-center grid grid-cols-1 md:grid-cols-3 md:gap-x-3 gap-y-6  m-3 px-7 py-10">
        <div className="flex flex-col justify-center items-center">
          <img className="w-2/5 mr-2  " src={happy} alt="Happy" />
          <h2 className="my-6 text-2xl md:text-5xl text-yellow-500">
            Be Proud
          </h2>
          <p className=" px-4 ">
            Livquiz makes participation fun and encourages participants to
            participate actively
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <img className="w-2/5 mr-2  " src={focus} alt="Focus" />
          <h2 className="my-6 text-2xl md:text-5xl text-yellow-500">
            Stay Focus
          </h2>
          <p>Boredom is reduced and effective learning increases</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-2/5 mr-2  " src={Tools} alt="Tools" />
          <h2 className="my-6 text-2xl md:text-5xl text-yellow-500">
            Discovering Tools
          </h2>
          <p>Useful tool for teachers to engage in resilient students</p>
        </div>
      </div>
    </div>
  );
};

export default BeneficsUsingQuizShow;
