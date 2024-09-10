import { useState } from "react";
import Navbar from "./components/Navbar";
import QuizCreator from "./components/QuizCreator";
import QuizTaker from "./components/QuizTaker";
import QuizResult from "./components/QuizResult";

const App = () => {
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(null);

  const handleQuizCreate = (newQuiz) => {
    setQuiz(newQuiz);
  };

  const handleQuizSubmit = (userAnswers) => {
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score++;
      }
    });
    setScore(score);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        {!quiz ? (
          <QuizCreator onCreate={handleQuizCreate} />
        ) : score === null ? (
          quiz.questions.length > 0 ? (
            <QuizTaker quiz={quiz} onSubmit={handleQuizSubmit} />
          ) : (
            <p>No questions available.</p>
          )
        ) : (
          <QuizResult score={score} totalQuestions={quiz.questions.length} />
        )}
      </div>
    </div>
  );
};

export default App;
