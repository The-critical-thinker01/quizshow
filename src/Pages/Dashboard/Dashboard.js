import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../../API/Services/userService";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [Quizs, setQuiz] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    GetUser(userId)
      .then((res) => {
        setEmail(res.data.email);
        setNom(res.data.nom);
        setQuiz(res.data.quizs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center md:flex-row bg-white dark:bg-black w-full space-x-6  my-6 px-3 h-full overflow-scroll">
      <div className=" flex flex-col w-full md:w-1/5  md:h-full ">
        <div className="flex flex-row w-full pb-20 h-1/3  shadow-slate-600 shadow-md mb-2 ">
          <div className="flex flex-row w-full h-10 justify-center items-center  ">
            <div className="flex flex-row w-2/12 h-full  bg-blue-600 rounded-full m-1  border-1"></div>
            <div className=" flex flex-row w-9/12   bg-white">
              <h1 className=" ">
                {email} {nom}
              </h1>
            </div>
          </div>

          <div className="flex flex-col "></div>
        </div>

        <div className="flex flex-col w-full pb-20 h-1/3  shadow-slate-600 shadow-md mb-2 ">
          <div className="flex flex-row w-full bg-blue-600 h-9 ">
            <div className=" flex w-11/12  h-8 justify-between items-center ml-5  bg-white">
              <h1 className="ml-3 ">Espaces de travail</h1>
              <div className=" flex justify-center items-center h-full w-2/12  bg-blue-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full"></div>
        </div>

        <div className="flex flex-col w-full pb-20 h-1/3 shadow-slate-600 shadow-md mb-2">
          <div className="flex flex-row w-full bg-blue-600 h-9 ">
            <div className=" flex w-11/12  h-8 justify-between items-center ml-5  bg-white">
              <h1 className="ml-3 ">Communities</h1>
              <div className=" flex justify-center items-center h-full w-2/12 bg-blue-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full"></div>
        </div>

        <div className="flex flex-col w-full pb-20 h-1/3 shadow-slate-600 shadow-md mb-2">
          <div className="flex flex-row w-full bg-blue-600 h-9 ">
            <div className=" flex w-11/12  h-8 justify-between items-center ml-5  bg-white">
              <h1 className="ml-3 ">Classrooms</h1>
              <div className=" flex justify-center items-center h-full w-2/12 bg-blue-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full"></div>
        </div>

        <div className="flex flex-col w-full pb-20 h-1/3 shadow-slate-600 shadow-md mb-2">
          <div className="flex flex-row w-full bg-blue-600 h-9 ">
            <div className=" flex w-11/12  h-8 justify-between items-center ml-5  bg-white">
              <h1 className="ml-3 ">Settings</h1>
              <div className=" flex justify-center items-center h-full w-2/12 bg-blue-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full"></div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center w-full md:w-3/5 bg-yellow-500 md:p-6 ">
        <div
          className="p-6 flex flex-col bg-white rounded-lg w-1/4 items-center cursor-pointer"
          onClick={() => {
            navigate("/addquiz");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2> Add Quiz </h2>
        </div>

        <div className=" mt-2 p-4 border-t flex w-full space-x-4">
          {Quizs.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 flex flex-col bg-white rounded-lg w-1/4 items-center cursor-pointer"
                onClick={() => {
                  navigate(`/questionsboard/${item._id}`);
                }}
              >
                <h2> {item.name} </h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center h-full w-full md:w-1/5 bg-yellow-300  ">
        <div className="h-full"> rien a signaler pour l'instan bro</div>
      </div>
    </div>
  );
};

export default Dashboard;
