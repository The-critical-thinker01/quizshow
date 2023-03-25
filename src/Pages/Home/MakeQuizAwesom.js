import React from "react";
import teach from "../../asset/images/teach.svg";
const MakeQuizAwesom = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5 mb-3 ">
      <h1 className="flex  text-2xl md:text-5xl text-yellow-500 text-center   ">
        MAkE QUIZ AWESOME
      </h1>
      <div className="flex justify-center items-center mb-9"></div>
      <div className="flex flex-col w-full ">
        <div className="w-full md:w-7/12 border-2  bg-amber-500 rounded-br-full rounded-tr-3xl">
          <img className=" h-80 " src={teach} alt="TEACH" />
        </div>
        <div className="flex  flex-col  md:absolute w-full md:w-11/12 justify-end items-end p-2  space-y-1  h-80 md:space-y-7 ">
          <p>You can create quizzes, flashcards, workspaces and classes..</p>
          <p>
            There are lots of options for quizzes such as timer, password,
            scoreboard etc.
          </p>
          <p>Quizzes can be send as homework or can be played as game</p>
          <p>
            You can assign quizzes to classes and share instantly via link or QR
            code.
          </p>
          <p>
            Various media such as photos, music, audio, video can be used in
            quizzes along with formulas, charts, and graphs.
          </p>
          <p>more and more!</p>
        </div>
      </div>
    </div>
  );
};

export default MakeQuizAwesom;
