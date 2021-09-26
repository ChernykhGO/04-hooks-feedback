// - Вынеси блок кнопок в компонент
//   `<FeedbackOptions options={} onLeaveFeedback={}>`.

import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";


export default function FeedbackOptions({options, onLeaveFeedback}) {
  console.log(options)
return (
  <div>
    {options.map((option) => (
      <button
        type="button"
        key={option.name}
        name={option.name}
        style={{ backgroundColor: option.color }}
        className={styles.button}
        onClick={onLeaveFeedback}
      >
        {option.name}
      </button>
    ))}
  </div>
)
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ),
};
