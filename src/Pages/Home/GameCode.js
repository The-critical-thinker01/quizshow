import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GameCode = () => {
  const navigate = useNavigate();
  //641adbca6a0a3765dabd46ff
  const [code, setCode] = useState("");
  return (
    <div className="flex justify-center  items-center w-2/3 pl-5 h-16">
      <input
        type="text"
        placeholder="Enter Game Code Here "
        className="w-2/5 h-full text-center mt-3 rounded-lg shadow-slate-700 shadow-md"
        onChange={(e) => {
          setCode(e.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate(`/quiz/${code}`);
        }}
        className="flex justify-center items-center text-2xl m-4 w-1/5 h-full bg-yellow-300 rounded-lg"
      >
        Game Code
      </button>
    </div>
  );
};
export default GameCode;
