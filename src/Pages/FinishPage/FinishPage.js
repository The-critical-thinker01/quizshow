import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GetPlayer, RetryPlay } from "../../API/Services/quizService";
import QuestionAndAnswer from "./QuestionAndAnswer";
import man from "../../asset/images/man.png";
const FinishPage = () => {

    const { id, playerid } = useParams();

    const navigate = useNavigate();

    const [Player, SetPlayer] = useState({ answers: [] });

    const [points, SetPoints] = useState(0);
    const [totals, SetTotal] = useState(0);

    useEffect(() => {
        GetPlayer(playerid).then((res) => {
            SetPlayer(res.data);
            let numberofGood = 0;
            res.data.answers.forEach(item => {
                if (item.question.answer === item.answer)
                    numberofGood++;
            });
            SetTotal(res.data.answers.length)
            SetPoints(numberofGood);
            console.log();
        }).catch((err) => {
            console.log(err)
        })
    }, [playerid])

    const Retry = async () => {
        try {
            const player = await RetryPlay(playerid)
            console.log(player)
            navigate(`/game/${id}/${playerid}`)

        } catch (err) {
            console.log(err)
        }
    }

    return (<div className="flex w-full justify-center  bg-yellow-300 ">
        <div className="flex flex-col w-3/4 justify-center items-center">

            <div className=" flex w-1/6 p-3 justify-center items-center rounded-full bg-slate-400">
                <img
                    className="w-full h-full "
                    src={man}
                    alt="man"
                />
            </div>
            <button className="w-5/6 mt-3 mb-3 bg-cyan-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 h-20 rounded-2xl ">
                {Player.name} <span className="mx-4 text-blue-600"> {points}  / {totals}  pts </span>
            </button>
            <QuestionAndAnswer answers={Player.answers} />
            <button onClick={() => Retry()} className="w-3/6 mt-3 mb-3 bg-green-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 h-14 rounded-2xl ">
                Retry
            </button>
        </div>
    </div>
    );


};
export default FinishPage;
