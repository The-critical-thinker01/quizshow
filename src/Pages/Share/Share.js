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
      <div className="flex flex-col w-3/4 p-4 bg-white rounded-lg">
        <div className="w-full flex flex-row flex-wrap justify-center items-center bg-white rounded-xl">
          <div className="w-full flex flex-col flex-wrap justify-center border-b p-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-black">{QuizName}</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    navigate(`/questionsboard/${id}`);
                  }}
                  className="p-3  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  Questions
                </button>
                <button
                  onClick={() => {
                    navigate(`/players/${id}`);
                  }}
                  className="p-3  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  Players
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href={`/quiz/${id}`} target="_blank" rel="noopener noreferrer">
            <button className="p-3  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl ">
              Play Quiz
            </button>
          </a>
        </div>
        <div className="flex p-5 justify-around">
          <input
            value={link}
            className="p-4 border-2 rounded-lg w-1/2 outline-none"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(link);
              alert("Link copied");
            }}
            className="p-3 w-1/3 bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};
export default Share;
