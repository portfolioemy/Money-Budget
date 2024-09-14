import React from "react";
import PropTypes from "prop-types";
import "../../style/Expense-module.css";

const Modal = ({ visible, children, setVisible }) => {
  if (!visible) return <></>;

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};

Modal.defaultProps = {
  children: () => <></>,
  visible: false,
  setVisible: () => {},
};

export default Modal;
