import React from "react";
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../components/inputs/TextInput.jsx";
import styles from "../style/WelcomePage.module.css";
import WelcomePageImage from "../assets/Frame 14.png";
import StandardButton from "../components/buttons/StandardButton.jsx";
import { categories, useAPIContext } from "../context/ApiContext.jsx";

const LoginPage = () => {
  const { setUserData } = useAPIContext();
  const navigate = useNavigate();

  const submit = (values) => {
    setUserData(values);
    navigate("/dashboard");
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={WelcomePageImage} alt="Welcome" />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>
          Money <span>Budget</span>
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submit}
        >
          {({ isSubmitting, handleSubmit }) => (
            <>
              <TextInput
                label="Name"
                name={INPUT_FIELDS.NAME}
                type="text"
                placeholder="Enter your name"
              />
              <TextInput
                label="Income"
                name={INPUT_FIELDS.INCOME}
                type="number"
                placeholder="Enter your income"
              />
              <TextInput
                label="Goal"
                name={INPUT_FIELDS.GOAL}
                type="text"
                placeholder="Enter your goal"
              />

              <StandardButton
                label="start your calculation"
                onClick={handleSubmit}
                customClass={"primary"}
                hasIcon
              />
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

const INPUT_FIELDS = {
  INCOME: "income",
  NAME: "name",
  GOAL: "goal",
};

const initialValues = {
  [INPUT_FIELDS.INCOME]: "",
  [INPUT_FIELDS.NAME]: "",
  [INPUT_FIELDS.GOAL]: "",
};

const validationSchema = Yup.object({
  [INPUT_FIELDS.INCOME]: Yup.number()
    .required("Income is required")
    .positive("Income must be positive"),
  [INPUT_FIELDS.NAME]: Yup.string().required("Name is required"),
  [INPUT_FIELDS.GOAL]: Yup.string().required("Goal is required"),
});

export default LoginPage;
