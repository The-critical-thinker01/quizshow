import React from "react";
import teach from "../../asset/images/teach.svg";
const MakeQuizAwesom = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5 mb-5 ">
      <div className="flex justify-center items-center mt-12 mb-9">
        <h1 className=" text-6xl text-yellow-500  ">MAkE QUIZ AWESOME</h1>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col  absolute  w-11/12 justify-end items-end   h-80 space-y-7 ">
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
        <div className="w-7/12 border-2  bg-amber-500 rounded-br-full rounded-tr-3xl">
          <img className=" h-80 ml-0 " src={teach} alt="TEACH" />
        </div>
      </div>
    </div>
  );
};

export default MakeQuizAwesom;
