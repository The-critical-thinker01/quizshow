import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetQuizz } from "../../API/Services/quizService";
import Player from "./Player";

const Players = () => {
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);
  const [QuizName, setQuizName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetQuizz(id)
      .then((res) => {
        setPlayers(res.data.players);
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
            <div className="flex md:flex-row flex-col mb-5 md:justify-between">
              <h2 className="text-xl font-black">{QuizName}</h2>
              <div className="flex md:flex-row flex-col space-y-3 space-x-2">
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
                <button
                  onClick={() => {
                    navigate(`/share/${id}`);
                  }}
                  className="p-3  bg-green-400 shadow-slate-700 shadow-md text-lg hover:bg-slate-100 rounded-2xl "
                >
                  shareQuiz
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          {players.map((item, index) => (
            <Player player={item} Quizid={id} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Players;
