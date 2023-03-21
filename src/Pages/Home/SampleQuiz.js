import React from "react";
import know from "../../asset/images/knowledge.png";
import mat from "../../asset/images/1234.jpg";
import sport from "../../asset/images/sportquizpic.jpeg";
import food from "../../asset/images/drinkfoodpic.svg";
import Maths from "../../Quiz/Maths";
import FoodsDrink from "../../Quiz/FoodsDrink";
import GeneralKnowledge from "../../Quiz/GeneralKnowledge";
import "./../../App.css";
const SampleQuiz = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5 mb-3 hauterPropo ">
      <div className="flex justify-center items-center  mt-12 mb-9">
        <h1 className=" text-5xl text-yellow-500  ">
          SAMPLE QUIZ FROM QUIZSHOW !!
        </h1>
      </div>

      <div className="grid grid-cols-4 justify-center items-center  h-full gap-x-6 w-4/7 border-2 py-6 px-9 ">
        <div className="flex flex-col justify-between items-center    h-full ">
          <img className="w-5/6 mt-3 " src={know} alt="Happy" />
          <a
            href="/generalKnowledge"
            className="flex justify-center  items-center pl-8 h-1/3 rounded-bl-3xl rounded-br-3xl bg-green-300 border-20 mt-4  "
          >
            <h2 className=" text-4xl text-yellow-500">General knowledge</h2>
          </a>
        </div>

        <div className="flex flex-col justify-between items-center   h-full ">
          <img className="w-5/6 mt-3 " src={mat} alt="Maths quiz" />
          <a
            href="/maths"
            className="flex justify-center  items-center pl-8 h-1/3 rounded-bl-3xl rounded-br-3xl bg-green-300 border-2 mt-4  "
          >
            <h2 className=" text-4xl text-yellow-500">Math Quiz for Kids</h2>
          </a>
        </div>

        <div className="flex flex-col justify-between items-center    h-full ">
          <img className="w-5/6  mt-3 " src={sport} alt="Sport quiz" />
          <a
            href="/sport"
            className="flex justify-center  items-center pl-8 h-1/3 w-full  rounded-bl-3xl rounded-br-3xl  bg-green-300   mt-4  "
          >
            <h2 className=" text-4xl text-yellow-500">Sport for QuizShow </h2>
          </a>
        </div>

        <div className="flex flex-col justify-between items-center  h-full ">
          <img className="w-5/6 mt-3 " src={food} alt="Drink and Food Quiz" />
          <a
            href="/foodDrink"
            className="flex justify-center  items-center pl-8 h-1/3 rounded-bl-3xl rounded-br-3xl  bg-green-300   mt-4  "
          >
            <h2 className=" text-4xl text-yellow-500">Food and Drink</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SampleQuiz;
