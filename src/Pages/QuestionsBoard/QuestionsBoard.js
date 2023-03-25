import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetQuizz } from "../../API/Services/quizService";
import Question from "./Question";

const QuestionBoard = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [QuizName, setQuizName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetQuizz(id)
      .then((res) => {
        setQuestions(res.data.questions);
        setQuizName(res.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="flex w-full justify-center p-4 bg-yellow-300 min-h-screen">
      <div className="flex flex-col w-3/4 p-1 bg-white rounded-lg">
        <div className="w-full flex flex-row flex-wrap justify-center items-center  bg-white rounded-xl">
          <div className="w-full flex flex-col flex-wrap justify-center border-b ">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h2 className="text-xl font-black mb-2">{QuizName}</h2>
              <div className=" grid grid-cols-2 w-full gap-x-1 gap-y-2 justify-center items-center md:space-x-2 md:gap-y-2 md:m-1 ">
                <button
                  onClick={() => {
                    navigate(`/players/${id}`);
                  }}
                  className="p-3 w-full  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  Players
                </button>
                <button
                  onClick={() => {
                    navigate(`/addquestion/${id}`);
                  }}
                  className="px-0 py-3 bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  Add Question
                </button>
                <button
                  onClick={() => {
                    navigate(`/share/${id}`);
                  }}
                  className="p-3  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  shareQuiz
                </button>
                <button
                  onClick={() => {
                    navigate(`/quiz/${id}`);
                  }}
                  className="p-3  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  Play Quiz
                </button>
              </div>
            </div>
          </div>
        </div>

        {questions.map((question, index) => (
          <Question question={question} key={index} />
        ))}
        <div className="flex  justify-center md:justify-end mt-3">
          <button
            onClick={() => {
              navigate(`/addquestion/${id}`);
            }}
            className="p-3 mt-4   bg-green-400 shadow-slate-700 shadow-md text-3xl md:text-5xl hover:bg-slate-100 rounded-2xl "
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuestionBoard;
