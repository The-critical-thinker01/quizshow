import React from "react";
import playing_quiz from "../../asset/images/undraw_programming_re_kg9v.svg";
import sharing from "../../asset/images/undraw_sharing_articles_re_jnkp.svg";
import creati from "../../asset/images/undraw_designer_life_re_6ywf.svg";

const HowItWorks = () => {
  return (
    <div className=" flex flex-col ">
      <div className=" flex justify-center items-center  w-full">
        <h1 className="text-2xl md:text-5xl text-yellow-500 mt-12 mb-5">
          How does QuizShow Operate ?
        </h1>
      </div>

      <div className="justify-center items-center grid grid-cols-1 gap-y-3 mt-2 md:grid-cols-3 md:gap-x-3 md:gap-y-6  m-3 px-7 py-10">
        <div className="flex flex-col justify-center items-center">
          <img className="w-2/5 mr-2 mb-2  " src={creati} alt="workspace" />
          <h2 className="my-6 text-5xl mb-4 text-yellow-500">Create</h2>
          <p className=" px-4 ">
            It only takes minutes to create a learning game or trivia quiz on
            any topic, in any language.
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <img className="w-2/5 mr-2  " src={sharing} alt="workspace" />
          <h2 className="my-6 text-5xl mt-2 mb-4 text-yellow-500">
            Host or share
          </h2>
          <p>
            Host a live game with questions on a big screen or share a game with
            remote players.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-2/5 mr-2  " src={playing_quiz} alt="workspace" />
          <h2 className="my-6 text-5xl text-yellow-500">Play</h2>
          <p>
            Join a LivQuiz with a PIN provided by the host and answer questions
            on your device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
