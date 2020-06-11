import React from "react";
import "./with-spinner.styles.scss";

function WithSpinner(WrappedComponent) {
  function Spinner({ isLoading, ...otherProps }) {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  }

  return Spinner;
}

export default WithSpinner;
