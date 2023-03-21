import React from "react";
import Slider from "./Slider";
import QuizPropo from "./QuizPropo";
import HowItWorks from "./HowItWorks";
import BeneficsUsingQuizShow from "./BeneficsUsingQuizShow";
import StudentBenefics from "./StudentBenefics";
import MakeQuizAwesom from "./MakeQuizAwesom";
import SampleQuiz from "./SampleQuiz";
const Home = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Slider />
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
