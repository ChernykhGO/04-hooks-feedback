// Создай компонент `<Section title="">`, который рендерит секцию с заголовком и
//   детей (children). Оберни каждый из `<Statistics>` и `<FeedbackOptions>` в
//   созданный компонент секции.

import React from "react";
import PropTypes from "prop-types";
import styles from "./SectionTitle.module.css";


export default function SectionTitle({title, children}) {
return (
  <div className={styles.Section}>
    <h1>{title}</h1>
    {children}
  </div>
);
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
