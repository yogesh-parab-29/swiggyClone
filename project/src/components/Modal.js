import React from "react";

const Modal = ({
  desc,
  show,
  header,
  footer,
  success,
  failure,
  successConditionText,
  failureConditionText,
}) => {
  const showHideClassName = show ? "hide-div" : "show-div";
  // const failure=()=>(show = true)

  return (
    <div className="modal-section">
      <div className={showHideClassName}>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              {/* <span className="close" onClick={handleClose}>
                ×
              </span> */}
              <h3>{header}</h3>
            </div>
            <div className="modal-body">
              {desc}

              <div className="btn-container">
                <button
                  className="secondary-btn"
                  onClick={failure}
                >
                  <span>{failureConditionText}</span>
                </button>
                <button
                  className="primary-btn"
                  onClick={success}
                >
                  <span>{successConditionText}</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <h3>{footer}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
