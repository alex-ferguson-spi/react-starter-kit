import React, { useContext } from "react";
import PropTypes from "prop-types";
import TestContext from "../../TestContext";

const Button = ({ isDisabled, onClick, text }) => {
  const [test, setTest] = useContext(TestContext);
  console.log(test);

  return (
    <button
      style={{ color: test }}
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
