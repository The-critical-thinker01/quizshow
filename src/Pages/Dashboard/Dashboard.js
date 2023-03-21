import React from "react";
import { useState } from "react";
import user from "../Login/Login";
import Modal from "./Modal";
const Dashboard = (props) => {
  const [email_, setEmail] = useState("");

  return (
    <div className=" flex fle bg-white dark:bg-black w-full space-x-6  my-6 px-3 h-full overflow-scroll">
      <div className=" flex flex-col w-1/5  h-full ">
        <div className="flex flex-row w-full pb-20 h-1/3  shadow-slate-600 shadow-md mb-2 ">
          <div className="flex flex-row w-full h-10 justify-center items-center  ">
            <div className="flex flex-row w-2/12 h-full  bg-blue-600 rounded-full m-1  border-1"></div>
            <div className=" flex flex-row w-9/12   bg-white">
              <h1 className=" ">Nom du client ici</h1>
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
      <div className=" flex flex-col w-3/5 bg-red-500  ">
        <Modal />
      </div>
      <div className=" flex flex-col w-1/5 bg-yellow-300  "></div>
    </div>
  );
};

export default Dashboard;
