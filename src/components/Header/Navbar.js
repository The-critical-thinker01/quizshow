import Slider from "../../Pages/Home/Slider";
import Switcher from "../Switcher";
const NavBar = () => {
  return (
    <div className="flex justify-between h-20 bg-yellow-300 text-white items-center px-6 shadow-black shadow-md">
      <div>
        <a
          href="/"
          className="text-black dark:text-white text-4xl cursor-pointer"
        >
          {" "}
          QuizShow
        </a>
      </div>

      <div className="flex text-2xl justify-center items-center">
        <a
          href="/login"
          className="text-black dark:text-white p-4 hover:bg-white hover:text-black rounded-3xl"
        >
          Login
        </a>
        <a
          href="/signup"
          className="text-black dark:text-white p-4 hover:bg-white hover:text-black rounded-3xl"
        >
          Sign Up
        </a>
        <Switcher />
        <div className="w-14 h-14">
          <svg
            className="h-full w-full text-black"
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
        </div>
      </div>
    </div>
  );
};
export default NavBar;
