import React from "react";
import styles from "../../style/Header.module.css";
import LogoImage from "../../assets/logo-main.svg";
import IconUser from "../../assets/user.svg";
import StandardButton from "../buttons/StandardButton";
import Modal from "../modals/Modal";
import { categories, useAPIContext } from "../../context/ApiContext";
import TextInput from "../inputs/TextInput";
import { Formik } from "formik";
import * as Yup from "yup";

const Header = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { getUserData, addExpense, expenses } = useAPIContext();
  const submit = (values) => {
    console.log(values);

    addExpense(values);
    setModalVisible(false);
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
            validationSchema={validationSchema(
              getUserData().income -
                expenses.reduce(
                  (acc, expense) => acc + parseFloat(expense.amount),
                  0
                )
            )}
            onSubmit={submit}
          >
            {({ isSubmitting, handleSubmit, setFieldValue }) => (
              <>
                <TextInput
                  name={INPUT_FIELDS.EXPENSE}
                  type="text"
                  placeholder="Enter your expense's name"
                />
                <TextInput
                  name={INPUT_FIELDS.AMOUNT}
                  type="number"
                  placeholder="Enter your expense"
                />
                <select className={styles.selector}
                  name={INPUT_FIELDS.CATEGORY}
                  onChange={(e) => {
                    setFieldValue(INPUT_FIELDS.CATEGORY, e?.target?.value);
                  }}
                >
                  {categories.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
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
        <div className={styles.user}>
          <img src={IconUser} alt="User Icon" className={styles.icon} />
          <h1>Welcome, {getUserData()?.name ?? "Guest"}</h1>
        </div>
      </div>
    </header>
  );
};
const INPUT_FIELDS = {
  EXPENSE: "expense",
  AMOUNT: "amount",
  CATEGORY: "category",
};

const initialValues = {
  [INPUT_FIELDS.EXPENSE]: "",
  [INPUT_FIELDS.AMOUNT]: "",
  [INPUT_FIELDS.CATEGORY]: "",
};

const validationSchema = (maxAmount) =>
  Yup.object({
    [INPUT_FIELDS.AMOUNT]: Yup.number()
      .required("Expense is required")
      .positive("Expense must be positive")
      .max(maxAmount),
    [INPUT_FIELDS.EXPENSE]: Yup.string().required("Expense name is required"),
    [INPUT_FIELDS.CATEGORY]: Yup.string().required("Category is required"),
  });

export default Header;
