import React, { useState } from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import './App.css'; // Import the CSS file for styling

function App() {
  const questions = [
    {
      question: "What is the capital of France?",
      image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      choices: ["Berlin", "Madrid", "Paris", "Rome"]
    },
    {
      question: "What is the largest planet in our solar system?",
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      choices: ["Earth", "Jupiter", "Mars", "Venus"]
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      choices: ["Oxygen", "Gold", "Silver", "Iron"]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('You have completed all the questions!');
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="App">
      <MultipleChoiceQuestion
        key={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        image={questions[currentQuestionIndex].image}
        choices={questions[currentQuestionIndex].choices}
        index={currentQuestionIndex}
      />
      <div className="navigation-buttons">
        <button 
          onClick={handlePreviousClick} 
          disabled={currentQuestionIndex === 0}
          className="btn prev-btn"
        >
          Previous
        </button>
        <button 
          onClick={handleNextClick} 
          disabled={currentQuestionIndex === questions.length - 1}
          className="btn next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
