import log_img from "../../asset/images/log_img.svg";
import logo from "./../../asset/images/logo.svg";
import laoding_gif from "./../../asset/images/loading-gif.gif";
import { CreateUser } from "../../API/Services/userService";
import { useState } from "react";
import "../../App.css";

const SignUp = () => {
  const [nom_, setNom] = useState("");
  const [prenom_, setPrenom] = useState("");
  const [password_, setPassword] = useState("");
  const [email_, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      nom: nom_,
      prenom: prenom_,
      password: password_,
      email: email_,
    };
    CreateUser(user)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div class="animeUp">
      {loading && (
        <div className="flex w-full justify-center items-center h-full absolute bg-transparent">
          <img src={laoding_gif} alt="ras" />
        </div>
      )}
      <div className=" flex  ">
        <div className=" bg-yellow-500 mt-2 mr-1 w-1/2 px-2  py-2 ">
          <div className=" flex  mb-24 justify-between text bg-yellow-500   w-full px-1 py-1  h-20 ">
            <h3 className=" flex items-center   text-xl">
              {" "}
              Already have an account ?
            </h3>
            <a
              href="/login"
              className="p-4   text-center hover:bg-slate-500 bg-yellow-200 w-1/3 shadow-slate-700 shadow-md hover:text-black rounded-xl hover:rounded-3xl"
            >
              Login
            </a>
          </div>

          <div className="flex bg-yellow-500 z-10 mr-1  w-full">
            <img src={log_img} alt="ras" />
          </div>
        </div>
        <div className="  mt-2 mr-1 w-1/2 px-2  py-2 ">
          <div className="flex flex-col  px-5 justify-start w-full text-lg ">
            <div className="flex flex-col mt-2 justify-center items-center pb-10 ">
              <img
                className="  h-32 w-32  rounded-full bg-yellow-500  "
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

            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className=" mb-2">Nom :</label>
                <input
                  className="mb-5 h-14  border-4  border-yellow-300 rounded-3xl outline-none pl-5  hover:border-slate-700 place-content-start"
                  placeholder="  Votre Nom ..."
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className=" mb-2">Prenom :</label>
                <input
                  className="mb-5 h-14  border-4  border-yellow-300 rounded-3xl outline-none pl-5  hover:border-slate-700 place-content-start"
                  placeholder="  Votre Prenom ..."
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className=" mb-2">Email :</label>
                <input
                  type="mail"
                  className="mb-5 h-14  border-4  border-yellow-300 rounded-3xl outline-none pl-5  hover:border-slate-700 place-content-start"
                  placeholder="   Email ..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">password :</label>
                <input
                  type="password"
                  className="h-14  border-yellow-300  border-4  outline-none rounded-3xl pl-5  hover:border-slate-700 "
                  placeholder="  Mot de Passe ..."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className=" p-1/2 h-16 bg-yellow-500 text-3xl mt-8   w-3/4 rounded-xl hover:bg-slate-700 mb-16 hover:text-white hover:rounded-3xl shadow-slate-700 shadow-lg items-center "
                >
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
