import { useState, useEffect } from "react";
import Timer from "./Timer";
import Question from "./Question";

const QuizTaker = ({ quiz, onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    if (timeUp) {
      onSubmit(userAnswers);
    }
  }, [timeUp, userAnswers, onSubmit]);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onSubmit(userAnswers);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
      <Timer
        duration={quiz.questions.length * 10}
        onTimeUp={() => setTimeUp(true)}
      />
      {quiz.questions.length > 0 ? (
        <Question
          question={quiz.questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default QuizTaker;
