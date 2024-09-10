const QuizResult = ({ score, totalQuestions }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
      <p className="text-xl">
        You scored {score + 1} out of {totalQuestions}!
      </p>
    </div>
  );
};

export default QuizResult;
