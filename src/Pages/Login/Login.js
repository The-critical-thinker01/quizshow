import log_img from "./../../asset/images/log_img.svg";
import logo from "./../../asset/images/logo.svg";
import { useState } from "react";
import { LoginUser } from "../../API/Services/userService";
import loading_gif from "../../asset/images/loading-gif.gif";
const Login = () => {
  const [email_, setEmail] = useState("");
  const [password_, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      email: email_,
      password: password_,
    };

    LoginUser(user)
      .then((res) => {
        setLoading(false);

        console.log(res.data);
        console.log("user  login sucessfuly !!!");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="bg-slate-50">
      {loading && (
        <div className="flex w-full justify-center items-center h-full absolute bg-transparent">
          <img src={loading_gif} alt="ras" />
        </div>
      )}
      <div className="flex flex-row mt-2 justify-center ">
        {/* debut pour la partir login*/}
        <div className="text-4xl flex flex-col justify-start  w-1/2 items-center  ">
          <div className="flex flex-col mt-2 justify-center items-center pb-10 ">
            <img
              className=" h-64 w-64 rounded-full bg-yellow-500  "
              src={logo}
              alt=" Ras"
            />
            <h1 className=" mb-3">QuizShow</h1>

            <h1 className="text-black text-2xl italic mb-2 ">
              ~~ WELCOME BACK TO QUIZSHOW !!!
            </h1>
            <h3 className="text-black italic text-2xl ">
              Login back to your quizshow account
            </h3>
          </div>

          <form
            className="flex flex-col  px-5 justify-start w-full text-lg "
            onSubmit={HandleSubmit}
          >
            <label className=" mb-2">Email :</label>
            <input
              type="email"
              className="mb-5 h-14  border-4  border-yellow-300 rounded-3xl outline-none pl-5  hover:border-slate-700 place-content-start"
              placeholder="   Email ..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mb-2">password :</label>
            <input
              type="password"
              className="h-14  border-yellow-300  border-4  outline-none rounded-3xl pl-5  hover:border-slate-700 "
              placeholder="  Mot de Passe ..."
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className=" flex flex-row  justify-between my-10  text-xl w-full px-4 ">
              <div className="flex items-center  ">
                <input type="checkbox" className="h-14 w-4 mr-1" /> Keep Me
                Login
              </div>
              <div className=" flex items-center ">
                <a
                  href="/"
                  className=" hover:cursor-pointer underline text-yellow-500"
                >
                  Forgot password
                </a>
              </div>
            </div>
            <button
              type="submit"
              className=" p-1/2 h-16 bg-yellow-500 ml-16 w-3/4 rounded-xl hover:bg-slate-700 mb-16 hover:text-white shadow-slate-700 shadow-lg items-center "
            >
              Login
            </button>
          </form>

          <div className="flex justify-between text-lg px-4 w-full">
            &copy; 2023 Alll Rights Reserved
            <div className="flex justify-between w-2/5">
              <a href="/" className="underline hover:cursor-pointer">
                Terms Of Service
              </a>
              <a href="/" className="underline hover:cursor-pointer">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* insertion de l'image*/}
        <div className=" bg-yellow-500  mr-1 w-1/2 px-2  py-2 ">
          <div className=" flex  mb-24 justify-between text bg-yellow-500   w-full px-1 py-1  h-20 ">
            <h3 className=" flex items-center   text-xl">
              Don't have an account ?
            </h3>
            <a
              href="/signup"
              className="p-4   text-center hover:bg-slate-500 bg-yellow-200 w-1/3 shadow-slate-700 shadow-md hover:text-white text-3xl  rounded-3xl"
            >
              Sign Up
            </a>
          </div>

          <div className="flex bg-yellow-500 z-10 mr-1  w-full">
            <img src={log_img} alt="ras" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
