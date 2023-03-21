import Home from "../../Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Header from "../Header/Header";
import Maths from "../../Quiz/Maths";
import Sport from "../../Quiz/Sport";
import FoodsDrink from "../../Quiz/FoodsDrink";
import GeneralKnowledge from "../../Quiz/GeneralKnowledge";
//import Switcher from "../Switcher";
//import TestFormu from "../../Pages/Home/TestFormu";
import Footer from "../Footer/Footer";
import "../../App.css";
import Dashboard from "../../Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="w-100">
        <Header />
        {/* <TestFormu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/board" element={<Dashboard />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="/generalKnowledge" element={<GeneralKnowledge />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/foodDrink" element={<FoodsDrink />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
