import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QuizManager from "./pages/QuizManager/QuizManager.jsx"
import LandingPage from "./pages/LandingPage/LandingPage.jsx"
import ResultPage from "./pages/ResultPage/ResultPage.jsx"
import './App.scss'

function App() {
  const [responses, setResponses] = useState({
    age: "",
    gender: "",
    sexual_orientation: "",
    education: "",
    location: "",
    career_field: "",
    career_ambition: "",
    openness: "",
    extraversion: "",
    agreeableness: "",
    conscientiousness: "",
    chronotype: "",
    spontaneity: "",
    love_language: "",
    emotional_expressiveness: ""
  });


  return (
    <div className="app-layout">
      <div className="app-layout__content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quizmanager" element={<QuizManager responses={responses} setResponses={setResponses} />} />
            <Route path="/results/" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
