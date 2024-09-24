import React, { useState } from "react";
import { additionalExpense, useAPIContext } from "../../context/ApiContext";
import styles from "../../style/Dashboard.module.css";

const Optionals = () => {
  const { addExpense, expenses, userData } = useAPIContext();
  const totalIncome = parseFloat(userData?.income) || 1;
  const totalExpenses =
    expenses?.reduce((sum, item) => sum + parseFloat(item.amount), 0) || 0;
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddOptionalExpense = (expense) => {
    if (expense.amount > totalIncome - totalExpenses) {
      setErrorMessage(
        "You cannot add this expense. It exceeds your remaining income!"
      );
      return;
    }
    setErrorMessage("");
    addExpense(expense);
  };

  return (
    <div className={styles.optionalsContainer}>
      <h2 className={styles.optionalsTitle}>Optionals</h2>
      <div className={styles.fixedExpenses}>
        <h3 className={styles.expenseHeader}>CHOOSE ANY ADDITIONAL EXPENSES</h3>
        <ul className={styles.expenseList}>
          {additionalExpense.map((expense, index) => (
            <li key={index} className={styles.expenseItem}>
              <div className={styles.expenseIcon}>{expense.icon}</div>
              <span className={styles.expenseName}>{expense.expense}</span>
              <button
                className={styles.selectButton}
                onClick={() => handleAddOptionalExpense(expense)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
      <div className={styles.goal}>
        <h2 className={styles.optionalsTitle}>Goal</h2>
        <p className={styles.expenseHeader}>{userData?.goal}</p>
      </div>
    </div>
  );
};

export default Optionals;
