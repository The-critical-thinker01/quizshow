import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GameCode = () => {
  const navigate = useNavigate();
  //641adbca6a0a3765dabd46ff
  const [code, setCode] = useState("");
  return (
    <div className="flex flex-col justify-center  items-center w-6/7 h-24 md:h-16 my-4  space-y-2 md:ml-5 md:w-2/3   sm:flex sm:flex-row  ">
      <input
        type="text"
        placeholder="Enter Game Code Here "
        className="w-10/12 md:w-2/5   h-1/2 text-center  md:h-full rounded-lg shadow-slate-700 shadow-md    "
        onChange={(e) => {
          setCode(e.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate(`/quiz/${code}`);
        }}
        className=" flex justify-center items-center w-5/12 hover:bg-white md:text-2xl md:m-4 md:w-1/5  md:h-full h-1/2 md:bg-slate-400 rounded-lg  shadow-slate-500 shadow-md bg-yellow-300"
      >
        Game Code
      </button>
    </div>
  );
};
export default GameCode;
