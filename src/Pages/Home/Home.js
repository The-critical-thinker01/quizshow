import React, { useEffect } from "react";
import Slider from "./Slider";
import QuizPropo from "./QuizPropo";
import HowItWorks from "./HowItWorks";
import BeneficsUsingQuizShow from "./BeneficsUsingQuizShow";
import StudentBenefics from "./StudentBenefics";
import MakeQuizAwesom from "./MakeQuizAwesom";
import SampleQuiz from "./SampleQuiz";
import GameCode from "./GameCode";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userid = sessionStorage.getItem('userId');
    if(userid){
      navigate('/board')
    }
  }, [navigate])
  return (
    <div className="bg-white dark:bg-black">
      <Slider />
      <GameCode />
      <QuizPropo />
      <HowItWorks />
      <BeneficsUsingQuizShow />
      <StudentBenefics />
      <MakeQuizAwesom />
      <SampleQuiz />
    </div>
  );
};

export default Home;
