import React from "react";
import training from "../../asset/images/undraw_developer_activity_re_39tg.svg";
import school from "../../asset/images/undraw_educator_re_ju47.svg";
import events from "../../asset/images/undraw_special_event_-4-aj8.svg";
import workspace from "../../asset/images/undraw_shared_workspace_re_3gsu.svg";
import "../../App.css";

const QuizPropo = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6  justify-center items-center md:grid md:grid-cols-2 md:gap-x-3  m-3 px-7 py-10  ">
      <div className="flex  flex-col  h-72  p-3 rounded-xl shadow-slate-500 shadow-md ">
        <div className="flex h-2/7   items-center">
          <h1 className=" mt-0 text-5xl text-yellow-500">For Workplace</h1>
        </div>
        <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
          <img className="w-2/5 mr-2  " src={workspace} alt="workspace" />
          <p>
            Motivate, manage, operate, and hire your team. Collaborate and take
            feedback in an interactive way.
          </p>
        </div>
      </div>

      <div className="flex  flex-col  h-72  p-3  rounded-xl shadow-slate-500 shadow-md bg-yellow-300 ">
        <div className="flex h-2/7   items-center">
          <h1 className=" mt-0 text-5xl">For Students</h1>
        </div>

        <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
          <p>
            Have better measurement and evaluation processes by interactive and
            easy platform. Students will love quizzes created by Livquiz.
          </p>
          <img className="w-2/5 mr-2  " src={school} alt="workspace" />
        </div>
      </div>

      <div className="flex  flex-col  h-72  p-3  rounded-xl  shadow-slate-500 shadow-md bg-yellow-300 ">
        <div className="flex h-2/7   items-center">
          <h1 className=" mt-0 text-5xl">For Events</h1>
        </div>

        <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
          <img className="w-2/5 mr-2  " src={events} alt="workspace" />
          <p>
            Plan fun events by getting feedback. Collect information and plan
            the event by getting more results via gamified quizzes and polls.
          </p>
        </div>
      </div>

      <div className="flex  flex-col  h-72  p-3  rounded-xl shadow-slate-500 shadow-md ">
        <div className="flex h-2/7   items-center">
          <h1 className=" mt-0 text-5xl text-yellow-500">For Training</h1>
        </div>

        <div className=" flex flex-row justify-center items-center  h-full p-2 pl-0  ">
          <img className="w-2/5 mr-2  " src={training} alt="workspace" />
          <p>
            Keep training modules on Liquiz for easy access and adapt to remote
            work now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPropo;
