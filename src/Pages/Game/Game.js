import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Options from "./Options";
import { GetQuizz, answerQuestion } from "../../API/Services/quizService";

//:id/:playerid
const Game = () => {
    const [Questions, setQuestion] = useState([{ options: [] }]);

    const [Quiz, setQuiz] = useState({});
    const [indexCurentquestion, SetindexCurentquestion] = useState(0);
    const [currentAnswer, SetcurrentAnswer] = useState(0);
    const [endOfQuiz, SetEndOfQuiz] = useState(false);

    const { id, playerid } = useParams();

    useEffect(() => {
        GetQuizz(id).then((res) => {
            setQuiz(res.data)
            setQuestion(res.data.questions)
        }).catch((err) => {
            console.log(err)

        })
    }, [])

    const FinishQuiz = () => {
        sumitAnswer();
    }

    const sumitAnswer = () => {
        if (indexCurentquestion === Questions.length - 2) {
            SetEndOfQuiz(true)
        }

        
        answerQuestion(playerid, Questions[indexCurentquestion]._id, currentAnswer).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

        if (indexCurentquestion !== Questions.length - 1) {
            SetindexCurentquestion(indexCurentquestion + 1);
        }
    }
    return (
        <div className="w-full">
            <div className="flex flex-col  justify-center items-center">
                <button className="w-5/6 mt-3 mb-3 bg-cyan-400 shadow-slate-700 shadow-md text-3xl hover:bg-slate-100 h-20 rounded-2xl ">
                    {Questions[indexCurentquestion].title}
                </button>

                <Options options={Questions[indexCurentquestion].options} SetcurrentAnswer={SetcurrentAnswer} />

                {endOfQuiz ? (
                    <button onClick={() => FinishQuiz()} className="w-3/6 mt-3 mb-3 bg-green-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 h-14 rounded-2xl ">
                        End
                    </button>
                ) : <button onClick={() => sumitAnswer()} className="w-3/6 mt-3 mb-3 bg-green-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 h-14 rounded-2xl ">
                    next
                </button>}

            </div>
        </div>);
};
export default Game;
