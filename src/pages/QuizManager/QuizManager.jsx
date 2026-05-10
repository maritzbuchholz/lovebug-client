import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button.jsx";
import Age from "../../components/quizquestions/Age/Age.jsx";
import Education from "../../components/quizquestions/Education/Education.jsx";
import Gender from "../../components/quizquestions/Gender/Gender.jsx";
import Location from "../../components/quizquestions/Location/Location.jsx";
import SexualOrientation from "../../components/quizquestions/SexualOrientation/SexualOrientation.jsx";
import CareerField from "../../components/quizquestions/CareerField/CareerField.jsx";
import CareerAmbition from "../../components/quizquestions/CareerAmbition/CareerAmbition.jsx";
import Extraversion from "../../components/quizquestions/Extraversion/Extraversion.jsx";
import Conscientiousness from "../../components/quizquestions/Conscientiousness/Conscientiousness.jsx";
import LoveLanguage from "../../components/quizquestions/LoveLanguage/LoveLanguage.jsx";
import Agreeableness from "../../components/quizquestions/Agreeableness/Agreeableness.jsx";
import Openness from "../../components/quizquestions/Openness/Openness.jsx";
import Spontaneity from "../../components/quizquestions/Spontaneity/Spontaneity.jsx";
import Chronotype from "../../components/quizquestions/Chronotype/Chronotype.jsx";
import EmotionalExpressiveness from "../../components/quizquestions/EmotionalExpressiveness/EmotionalExpressiveness.jsx";
import logoIcon from "../../assets/logo/lovebug.svg";
import "./QuizManager.scss";

const QuizManager = ({ responses, setResponses }) => {
    const [step, setStep] = useState(1);
    const totalSteps = 15;
    const navigate = useNavigate();

    const handleNext = () => {
        if (step < totalSteps) {
            setStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    const handleSubmit = async () => {
        if (allAnswered) {
            navigate("/results")
            // try {
            //     const response = await fetch("http://localhost:8080/api/quiz", {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json"
            //         },
            //         body: JSON.stringify(responses)
            //     });

            //     if (response.ok) {
            //         const data = await response.json();
            //         console.log("Quiz submitted!", data);
            //         if (data && data.user_id) {
            //             setResponses({
            //                 age: "", gender: "", sexual_orientation: "", education: "",
            //                 location: "", career_field: "", career_ambition: "",
            //                 openness: "", extraversion: "", agreeableness: "",
            //                 conscientiousness: "", chronotype: "", spontaneity: "",
            //                 love_language: "", emotional_expressiveness: ""
            //             });
            //             setStep(1);
            //             navigate(`/results/${data.user_id}`);
            //         } else {
            //             console.error("Missing user_id from response.");
            //         }
            //     } else {
            //         console.error("Failed to submit quiz");
            //     }
            // } catch (error) {
            //     console.error("Error submitting quiz:", error);
            // }
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return <Age
                    age={responses?.age}
                    setAge={(newAge) => setResponses({ ...responses, age: newAge })}
                />
            case 2:
                return <Location
                    location={responses?.location}
                    setLocation={(newLocation) => setResponses({ ...responses, location: newLocation })}
                />
            case 3:
                return <Gender
                    gender={responses?.gender}
                    setGender={(newGender) => setResponses({ ...responses, gender: newGender })}
                />
            case 4:
                return <SexualOrientation
                    sexual_orientation={responses?.sexual_orientation}
                    setSexualOrientation={(newOrientation) => setResponses({ ...responses, sexual_orientation: newOrientation })}
                    gender={responses?.gender}
                />
            case 5:
                return <Education
                    education={responses?.education}
                    setEducation={(newEducation) => setResponses({ ...responses, education: newEducation })}
                />
            case 6:
                return <CareerField
                    careerField={responses?.career_field}
                    setCareerField={(newCareerField) => setResponses({ ...responses, career_field: newCareerField })}
                />
            case 7:
                return <CareerAmbition
                    careerAmbition={responses?.career_ambition}
                    setCareerAmbition={(newCareerAmbition) => setResponses({ ...responses, career_ambition: newCareerAmbition })}
                />
            case 8:
                return <Extraversion
                    extraversion={responses?.extraversion}
                    setExtraversion={(newExtraversion) => setResponses({ ...responses, extraversion: newExtraversion })}
                />
            case 9:
                return <Conscientiousness
                    conscientiousness={responses?.conscientiousness}
                    setConscientiousness={(newConscientiousness) => setResponses({ ...responses, conscientiousness: newConscientiousness })}
                />
            case 10:
                return <LoveLanguage
                    loveLanguage={responses?.love_language}
                    setLoveLanguage={(newLoveLanguage) => setResponses({ ...responses, love_language: newLoveLanguage })}
                />
            case 11:
                return <Agreeableness
                    agreeableness={responses?.agreeableness}
                    setAgreeableness={(newAgreeableness) => setResponses({ ...responses, agreeableness: newAgreeableness })}
                />
            case 12:
                return <Openness
                    openness={responses?.openness}
                    setOpenness={(newOpenness) => setResponses({ ...responses, openness: newOpenness })}
                />
            case 13:
                return <Spontaneity
                    spontaneity={responses?.spontaneity}
                    setSpontaneity={(newSpontaneity) => setResponses({ ...responses, spontaneity: newSpontaneity })}
                />
            case 14:
                return <Chronotype
                    chronotype={responses?.chronotype}
                    setChronotype={(newChronotype) => setResponses({ ...responses, chronotype: newChronotype })}
                />
            case 15:
                return <EmotionalExpressiveness
                    emotionalExpressiveness={responses?.emotional_expressiveness}
                    setEmotionalExpressiveness={(newExpressiveness) => setResponses({ ...responses, emotional_expressiveness: newExpressiveness })}
                />
            default:
                return <p>Content for step {step} goes here...</p>;
        }
    };

    const progressPercentage = (step / totalSteps) * 100;

    const stepKeys = {
        1: 'age', 2: 'location', 3: 'gender', 4: 'sexual_orientation',
        5: 'education', 6: 'career_field', 7: 'career_ambition', 8: 'extraversion',
        9: 'conscientiousness', 10: 'love_language', 11: 'agreeableness', 12: 'openness',
        13: 'spontaneity', 14: 'chronotype', 15: 'emotional_expressiveness'
    };
    const currentKey = stepKeys[step];
    const isCurrentStepAnswered = responses && responses[currentKey] !== "" && responses[currentKey] !== undefined && responses[currentKey] !== null;

    const allAnswered = Object.values(responses || {}).every(val => val !== "" && val !== undefined && val !== null);

    return (
        <div className="quiz-manager">
            <div className="quiz-progress-header">
                <Link to="/" className="quiz-logo-container">
                    <div className="quiz-logo-text">
                        <img src={logoIcon} alt="LoveBug Logo" className="quiz-logo" />LoveBug
                    </div>
                </Link>
                <div className="quiz-step-tracker">
                    {step} / {totalSteps}
                </div>
            </div>

            <div className="quiz-progress-container">
                <div
                    className="quiz-progress-bar"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>

            <div className="quiz-content">
                {renderStepContent()}
            </div>

            <div className="quiz-controls">
                {step > 1 ? (
                    <Button onClick={handlePrev} variant="quiz-secondary">Back</Button>
                ) : (
                    <Button isLink to="/" variant="quiz-secondary">Cancel</Button>
                )}

                {step < totalSteps ? (
                    <Button onClick={handleNext} variant="quiz-primary" disabled={!isCurrentStepAnswered}>Continue</Button>
                ) : (
                    <Button onClick={handleSubmit} variant="quiz-primary" disabled={!allAnswered}>Submit</Button>
                )}
            </div>
        </div>
    );
};

export default QuizManager;