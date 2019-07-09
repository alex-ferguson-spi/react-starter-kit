import React from "react";
import PropTypes from "prop-types";

const Button = ({ isDisabled, onClick, text }) => {
  return (
    <button
      role="button"
      name="unimportant-button"
      aria-label="unimportant-button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
