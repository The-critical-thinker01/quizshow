import { useNavigate } from "react-router-dom";


const Player = ({ player, Quizid }) => {

    const navigate = useNavigate()


    return (
        <div className="w-full flex flex-row flex-wrap justify-center items-center bg-white rounded-xl">
            <div className="w-full flex flex-col flex-w.rap justify-center border-b p-4">

                <div className="flex justify-between">
                    <h2 className="text-xl">{player.name}</h2>
                    <div className="flex space-x-2">
                        <p>
                            {player.numberOfCorectAnswers} / {player.answers.length}
                        </p>
                        <svg onClick={() => { navigate(`/finish/${Quizid}/${player._id}`) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default Player;
