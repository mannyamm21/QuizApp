import { useState } from "react";

const QuizCreator = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: 0 },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === "options") {
      newQuestions[index][field] = newQuestions[index][field].map(
        (option, oIndex) => (oIndex === value.index ? value.value : option)
      );
    } else {
      newQuestions[index][field] = value;
    }
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    onCreate({ title, questions });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Question"
            value={q.question}
            onChange={(e) =>
              handleQuestionChange(index, "question", e.target.value)
            }
            className="w-full p-2 mb-2 border rounded"
          />
          {q.options.map((option, oIndex) => (
            <input
              key={oIndex}
              type="text"
              placeholder={`Option ${oIndex + 1}`}
              value={option}
              onChange={(e) =>
                handleQuestionChange(index, "options", {
                  index: oIndex,
                  value: e.target.value,
                })
              }
              className="w-full p-2 mb-2 border rounded"
            />
          ))}
          <select
            value={q.correctAnswer}
            onChange={(e) =>
              handleQuestionChange(
                index,
                "correctAnswer",
                parseInt(e.target.value)
              )
            }
            className="w-full p-2 mb-2 border rounded"
          >
            <option value={0}>Option 1</option>
            <option value={1}>Option 2</option>
            <option value={2}>Option 3</option>
            <option value={3}>Option 4</option>
          </select>
        </div>
      ))}
      <button
        onClick={addQuestion}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Question
      </button>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white p-2 rounded ml-4"
      >
        Create Quiz
      </button>
    </div>
  );
};

export default QuizCreator;
