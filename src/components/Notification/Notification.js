// Расширь функционал приложения так, чтобы блок статистики рендерился только после
// того, как был собран хотя бы один отзыв. Сообщение об отсутствиии статистики
// вынеси в компонент `<Notification message="No feedback given">`.

import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => <p>{message}</p>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
