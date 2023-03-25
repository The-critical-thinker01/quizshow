import React from "react";
import easyuse from "../../asset/images/use.svg";
import acess from "../../asset/images/acess.svg";
import earning from "../../asset/images/earnings.svg";
import pruduct from "../../asset/images/pruduct.svg";
import interact from "../../asset/images/interaction.svg";
import game from "../../asset/images/game.svg";
import focus from "../../asset/images/undraw_dev_focus_re_6iwt.svg";
import happy from "../../asset/images/undraw_happy_announcement_re_tsm0.svg";
import Tools from "../../asset/images/undraw_design_tools_-42-tf.svg";
import "../../App.css";

const StudentBenefics = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-center items-center">
        <h1 className=" text-2xl text-center md:text-5xl text-yellow-500 mt-12 mb-5">
          Benefits for Students
        </h1>
      </div>
      <div className="justify-center items-center grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-6  m-3 px-7 py-10  ">
        <div className="flex  flex-col  h-72  p-3  rounded-xl shadow-slate-500 shadow-md bg-yellow-300 ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0 text-2xl md:text-5xl">EASY TO USE</h1>
          </div>
          <div className=" flex flex-row justify-center items-center h-full p-2 pl-0  ">
            <img className="w-2/5 mr-2   " src={easyuse} alt=" easy to use" />
            <p>
              Thanks to the design of the platform, students can solve their
              tests in the easiest way
            </p>
          </div>
        </div>

        <div className="flex  flex-col  h-72  p-3 rounded-xl shadow-slate-500 shadow-md ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0  text-2xl md:text-5xl text-yellow-500">
              GAMIFICATION
            </h1>
          </div>
          <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
            <p>
              Game experience increases students' participation in the learning
              and teaching process
            </p>
            <img className="w-2/5 mr-2  " src={game} alt="Game" />
          </div>
        </div>

        <div className="flex  flex-col  h-72  p-3  rounded-xl  shadow-slate-500 shadow-md bg-yellow-300 ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0 text-2xl md:text-5xl">ACCESSIBILITY</h1>
          </div>

          <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
            <p>Students can access the tests from any platform</p>
            <img className="w-2/5 mr-2  " src={acess} alt="Acessibility" />
          </div>
        </div>

        <div className="flex  flex-col  h-72  p-3  rounded-xl shadow-slate-500 shadow-md ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0 text-2xl md:text-5xl text-yellow-500">
              INTERACTION
            </h1>
          </div>

          <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
            <p>
              Interaction between student and instructor increases via instant
              evaluation
            </p>
            <img className="w-2/5 mr-2  " src={interact} alt="Interaction" />
          </div>
        </div>

        <div className="flex  flex-col  h-72  p-3  rounded-xl  shadow-slate-500 shadow-md bg-yellow-300 ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0 text-2xl md:text-5xl">PRODUCTIVITY</h1>
          </div>

          <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
            <img className="w-2/5 mr-2  " src={pruduct} alt="Productivity" />
            <p>Students perform 73% higher in online tests</p>
          </div>
        </div>

        <div className="flex  flex-col  h-72  p-3  rounded-xl shadow-slate-500 shadow-md ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0 text-2xl md:text-5xl text-yellow-500">
              EARNINGS
            </h1>
          </div>

          <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
            <img className="w-2/5 mr-2  " src={earning} alt="Earnings" />
            <p>
              68% of students are more motivated when seeing their names on the
              leadership chart
            </p>
          </div>
        </div>

        <div className="flex  flex-col  h-72  p-3  rounded-xl  shadow-slate-500 shadow-md bg-yellow-300 ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0 text-2xl md:text-5xl">For Events</h1>
          </div>

          <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
            <img className="w-2/5 mr-2  " src={Tools} alt="Tools" />
            <p>
              Plan fun events by getting feedback. Collect information and plan
              the event by getting more results via gamified quizzes and polls.
            </p>
          </div>
        </div>

        <div className="flex  flex-col  h-72  p-3  rounded-xl shadow-slate-500 shadow-md ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0 text-2xl md:text-5xl text-yellow-500">
              FOR EVENTS
            </h1>
          </div>

          <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
            <img className="w-2/5 mr-2  " src={focus} alt="workspace" />
            <p>
              68% of students are more motivated when seeing their names on the
              leadership chart
            </p>
          </div>
        </div>

        <div className="flex  flex-col  h-72  p-3  rounded-xl shadow-slate-500 shadow-md bg-yellow-300 ">
          <div className="flex h-2/7   items-center">
            <h1 className=" mt-0 text-2xl md:text-5xl text-black">
              For Training
            </h1>
          </div>

          <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
            <img className="w-2/5 mr-2  " src={happy} alt="workspace" />
            <p>
              Keep training modules on Liquiz for easy access and adapt to
              remote work now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentBenefics;
