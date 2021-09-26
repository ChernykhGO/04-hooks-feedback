import React, { useState } from "react";

import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import SectionTitle from "./components/SectionTitle";
import Notification from "./components/Notification";

import "./App.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allReviews = [
    { name: "good", color: "lime" },
    { name: "neutral", color: "yellow" },
    { name: "bad", color: "red" },
  ];

  const сounterReviews = (event) => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default: console.warn(` ${event.target.name} не обнаружено`)
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }


  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (100 * good) / countTotalFeedback()
    );
  }

  return (
    <div>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={allReviews}
          onLeaveFeedback={сounterReviews}
        />
      </SectionTitle>

      <SectionTitle title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        )
          : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
      </SectionTitle>
    </div>
  )
}
