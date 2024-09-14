import React from "react";
import styles from "../../style/Header.module.css";
import LogoImage from "../../assets/logo-main.svg";
import IconUser from "../../assets/user.svg";
import StandardButton from "../buttons/StandardButton";
import Modal from "../modals/Modal";
import { useAPIContext } from "../../context/ApiContext";
import TextInput from "../inputs/TextInput";
import { Formik } from "formik";
import * as Yup from "yup";


const Header = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { getUserData,addExpense} = useAPIContext();
  const submit = (values) => {
    addExpense(values); 
    setModalVisible(false)
  };
  

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={LogoImage} alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.welcome}>
        <StandardButton
          label="New Expenses"
          onClick={() => {
            setModalVisible(true);
          }}
          customClass={"secondary"}
        />
        <Modal visible={modalVisible} setVisible={setModalVisible}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {({ isSubmitting, handleSubmit }) => (
              <>
                <TextInput
                  label="Expense Name"
                  name={INPUT_FIELDS.EXPENSE}
                  type="text"
                  placeholder="Enter your expense's name"
                />
                <TextInput
                  label="Expense"
                  name={INPUT_FIELDS.AMOUNT}
                  type="number"
                  placeholder="Enter your expense"
                />

                <StandardButton
                  label="Enter you expense"
                  onClick={handleSubmit}
                  customClass={"secondary"}
                  hasIcon
                />
              </>
            )}
          </Formik>
        </Modal>

        <img src={IconUser} alt="User Icon" className={styles.icon} />
        <h1>Welcome, {getUserData()?.name ?? "Guest"}</h1>
      </div>
    </header>
  );
};
const INPUT_FIELDS = {
    EXPENSE: "Expense",
    AMOUNT: "Amount",
  };

  const initialValues = {
    [INPUT_FIELDS.EXPENSE]: "",
    [INPUT_FIELDS.AMOUNT]: "",
  };

  const validationSchema = Yup.object({
    [INPUT_FIELDS.AMOUNT]: Yup.number()
      .required("Expense is required")
      .positive("Expense must be positive"),
    [INPUT_FIELDS.EXPENSE]: Yup.string().required("Expense name is required"),
  });

export default Header;
