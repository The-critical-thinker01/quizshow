import Switcher from "../Switcher";

import { useState } from "react";
export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-yellow-300  shadow-black shadow-md">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-3xl font-bold"> QuizShow</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 dark:text-white   p-4 hover:text-black rounded-2xl hover:bg-white ">
                <a href="/" className="  hover:text-black">
                  Home
                </a>
              </li>
              <li className=" dark:text-white p-4 hover:bg-white  rounded-2xl">
                <a href="/login" className="  hover:text-black">
                  Login
                </a>
              </li>
              <li className="text-black dark:text-white p-4 hover:bg-white hover:text-black rounded-2xl">
                <a href="/signup" className="  hover:text-black">
                  Sign Up
                </a>
              </li>
              <li className="text-gray-600 dark:text-white  p-4 hover:bg-white rounded-2xl">
                <a href="/about " className="  hover:text-black">
                  About US
                </a>
              </li>
              <li className="text-gray-600 dark:text-white  p-4 hover:bg-white rounded-2xl ">
                <a href="/about" className="  hover:text-black">
                  Contact US
                </a>
              </li>
              <li>
                <a>
                  <Switcher />
                </a>
              </li>
              <li>
                <a>
                  <svg
                    className="h-md w-md text-black"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="12" cy="12" r="9" />{" "}
                    <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
                    <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
                    <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// const Header = () => {
//   return (
//     <div className="flex justify-between h-20 bg-yellow-300 text-white items-center px-6 shadow-black shadow-md">
//       <div>
//         <a
//           href="/"
//           className="text-black dark:text-white text-4xl cursor-pointer"
//         >
//           {" "}
//           QuizShow
//         </a>
//       </div>

//       <div className="flex text-2xl justify-center items-center">
//         <a
//           href="/login"
//           className="text-black dark:text-white p-4 hover:bg-white hover:text-black rounded-3xl"
//         >
//           Login
//         </a>
//         <a
//           href="/signup"
//           className="text-black dark:text-white p-4 hover:bg-white hover:text-black rounded-3xl"
//         >
//           Sign Up
//         </a>
//         <Switcher />
//         <div className="w-14 h-14">
//           <svg
//             className="h-full w-full text-black"
//             width="50"
//             height="50"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             {" "}
//             <path stroke="none" d="M0 0h24v24H0z" />{" "}
//             <circle cx="12" cy="12" r="9" />{" "}
//             <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
//             <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
//             <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
//             <path d="M12.5 3a17 17 0 0 1 0 18" />
//           </svg>
//         </div>
//       </div>
//     </div>

//   );
// };
// export default Header;
