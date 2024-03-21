import React from "react";
import "./styles.css"
function Button({ text,onClick}) {
  return (
    <button
      onClick={onClick}
      className="custom-btn"
    >
      {text}
    </button>
  );
}

export default Button;
