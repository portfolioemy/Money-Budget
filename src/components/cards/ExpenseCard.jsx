import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useAPIContext } from "../../context/ApiContext";
import StandardButton from "../buttons/StandardButton";
import Modal from "../modals/Modal";
import TextInput from "../inputs/TextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import styles from "../../style/Dashboard.module.css"

const ExpenseCard = ({ expense }) => {
  const { updateExpense, deleteExpense, selectExpenseToEdit, categories } =
    useAPIContext();
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleEdit = () => {
    selectExpenseToEdit(expense);
    setModalVisible(true);
  };

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  const initialValues = {
    expense: expense.name,
    amount: expense.amount,
    category: expense.category,
  };

  const validationSchema = Yup.object().shape({
    expense: Yup.string().required("Expense name is required"),
    amount: Yup.number()
      .required("Amount is required")
      .positive("Amount must be positive"),
    category: Yup.string().required("Category is required"),
  });

  const handleSubmit = (values) => {
    const updatedExpense = { ...expense, ...values };
    updateExpense(updatedExpense);
    setModalVisible(false);
  };

  return (
    <div className={styles.expenseCard}>
      <div className={styles.expenseInfo}>
        <div className={styles.nameDate}>
        <p className={styles.expenseName}>{expense.expense}</p>
        <p className={styles.expenseDate}>
        {new Date(expense.createdAt).toLocaleDateString()}
      </p>
        </div>
       
      <p className={styles.expenseAmount}>${expense.amount}</p>

      </div>
      
      <div className={styles.iconContainer}>
        <button onClick={handleEdit}>
          <FaEdit size={24} color="green" />
        </button>
        <button onClick={handleDelete}>
          <FaTrash size={24} color="red" />
        </button>
      </div>
      
      

      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleSubmit, setFieldValue }) => (
            <>
              <TextInput
                name="expense"
                type="text"
                placeholder="Enter your expense's name"
              />
              <TextInput
                name="amount"
                type="number"
                placeholder="Enter the amount"
              />
              <select
                name="category"
                onChange={(e) => {
                  setFieldValue("category", e?.target?.value);
                }}
              >
                {categories && categories.length > 0 ? (
                  categories.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))
                ) : (
                  <option value="">No categories available</option>
                )}
              </select>

              <StandardButton
                label="Submit Expense"
                onClick={handleSubmit}
                customClass={"secondary"}
                hasIcon
              />
            </>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

ExpenseCard.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]).isRequired,
  }).isRequired,
};

export default ExpenseCard;
