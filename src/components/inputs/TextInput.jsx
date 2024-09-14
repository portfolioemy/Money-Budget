import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styles from "../../style/FormikForm.module.css";

const TextInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={id || props.name}>{label}</label>
      <input className={styles.input} id={id || props.name} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  id: '',
};

export default TextInput;
