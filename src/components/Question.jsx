const Question = ({ question, onAnswer }) => {
  if (!question) {
    return <p>No question available.</p>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{question.question}</h3>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(index)}
          className="block w-full p-2 mb-2 bg-blue-500 text-white rounded"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
