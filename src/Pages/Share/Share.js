import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetQuizz } from "../../API/Services/quizService";

const Share = () => {
  const navigate = useNavigate();

  const [QuizName, setQuizName] = useState([]);
  const { id } = useParams();

  const link = `https://quizshow-ashy.vercel.app/quiz/${id}`;

  useEffect(() => {
    GetQuizz(id)
      .then((res) => {
        setQuizName(res.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="flex w-full justify-center p-4 bg-yellow-300 min-h-screen">
      <div className="flex flex-col w-3/4 p-1 bg-white rounded-lg">
        <div className="w-full flex flex-row flex-wrap justify-center items-center bg-white rounded-xl">
          <div className="w-full flex flex-col flex-wrap justify-center border-b">
            <div className="flex md:flex-row flex-col w-full md:justify-between">
              <h2 className="w-full md:text-xl  font-black mb-3">{QuizName}</h2>
              <div className="grid grid-cols-2 w-full gap-2 h-14 md:flex md:space-x-2 ">
                <button
                  onClick={() => {
                    navigate(`/questionsboard/${id}`);
                  }}
                  className="md:p-3 w-full h-full  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  Questions
                </button>
                <button
                  onClick={() => {
                    navigate(`/players/${id}`);
                  }}
                  className="md:p-3 w-full h-full bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  Players
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center">
          <a href={`/quiz/${id}`} target="_blank" rel="noopener noreferrer">
            <button className="p-3  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl ">
              Play Quiz
            </button>
          </a>
        </div>
        <div className="flex md:flex-row flex-col mt-8 md:p-5 justify-around">
          <input
            value={link}
            className="p-1 md:p-4 border-2 rounded-lg w-full md:w-1/2 outline-none"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(link);
              alert("Link copied");
            }}
            className=" p-1 mt-5 md:p-3 w-full md:w-1/3 bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
          >
            Copy quiz Link
          </button>
        </div>
      </div>
    </div>
  );
};
export default Share;
