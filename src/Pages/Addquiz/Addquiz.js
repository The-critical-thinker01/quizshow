import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import know from "../../asset/images/knowledge.png";
import { NewQuiz } from "../../API/Services/quizService";


const AddQuiz = () => {
    const navigate = useNavigate()
    const [name, SetName] = useState("")

    const newQuiz = async () => {
        const id = sessionStorage.getItem('userId')
        NewQuiz({ name, id }).then((res) => {
            navigate(`/questionsboard/${res.data._id}`)
        }).catch((err) => {
           console.log(err)
        })

    }

    return (
        <div className="flex w-full justify-center  bg-yellow-300 ">
            <div className="flex flex-col w-3/4 justify-center items-center">
                <img className="w-1/6 mt-3 " src={know} alt="Happy" />
                <button className="w-5/6 mt-3 mb-3 bg-cyan-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 h-20 rounded-2xl ">
                    Add Quiz
                </button>

                <input
                    type="text"
                    required={true}
                    placeholder="Enter Quiz Name"
                    className="h-14 mt-5 mb-5 w-3/6 rounded-2xl text-center"
                    onChange={(e)=>SetName(e.target.value)}
                />
                <button onClick={() => { newQuiz() }} className="w-3/6 mt-3 mb-3 bg-green-400 shadow-slate-700 shadow-md text-5xl hover:bg-slate-100 h-14 rounded-2xl">
                    Start
                </button>
            </div>
        </div>
    );
};
export default AddQuiz;
