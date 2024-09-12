import React from 'react';
import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
import WelcomePageImage from '../assets/Frame 14.png';
import styles from '../style/WelcomePage.module.css';
import { Formik } from 'formik';
import { useAPIContext } from '../context/ApiContext';

const LoginPage = () => {
  const {setUserData, getUserData}=useAPIContext()
  // const navigate = useNavigate();
  const onSubmit = (values) => {
    setUserData(values)
    // Cookie.set('userDetails', JSON.stringify(values), { expires: 7 });
    // navigate('/dashboard');
  };


  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={WelcomePageImage} alt="Welcome" />
      </div>
      <div className={styles.formContainer}>
      <h1 className={styles.title}>Money <span>Budget</span></h1>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >

      </Formik>
        {/* <FormikForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          fields={fields}
          ButtonComponent={StartButton} 
        /> */}
      </div>
    </div>
  );
};


const INPUT_FIELDS={
    INCOME:'income',
    NAME:'name',
    GOAL:'goal'
}

const initialValues = { [INPUT_FIELDS.INCOME]: '', [INPUT_FIELDS.NAME]: '', [INPUT_FIELDS.GOAL]: '' };

  const validationSchema = Yup.object({
    [INPUT_FIELDS.INCOME]: Yup.number().required('Income is required').positive('Income must be positive'),
    [INPUT_FIELDS.NAME]: Yup.string().required('Name is required'),
    [INPUT_FIELDS.GOAL]: Yup.string().required('Goals are required'),
  });

export default LoginPage;
