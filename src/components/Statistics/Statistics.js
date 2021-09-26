// Вынеси отображение статистики в отдельный компонент
//   `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.
import React from "react";
import PropTypes from "prop-types";

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
console.log(positivePercentage)
  return (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage} %</p>
  </div>
);
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
