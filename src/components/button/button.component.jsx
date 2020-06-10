import React from "react";
import "./button.styles.scss";

function Button({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""}
        ${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
