import React, { useState } from 'react';
import './MultipleChoiceQuestion.css';

const MultipleChoiceQuestion = ({ question, image, choices, index }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const choiceLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-index-box">
          <span className="question-index">Question {index + 1}</span>
        </div>
        <h2>{question}</h2>
      </div>
      <div className="content-container">
        <div className="question-image">
          <img src={image} alt="Question visual" />
        </div>
        <div className="question-choices">
          {choices.map((choice, idx) => (
            <div
              key={idx}
              className={`choice ${selectedChoice === choice ? 'selected' : ''}`}
              onClick={() => handleChoiceClick(choice)}
            >
              <div className="choice-label-box">
                <span className="choice-label">{choiceLabels[idx]}</span>
              </div>
              <div className="choice-text-box">
                <span className="choice-text">{choice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
