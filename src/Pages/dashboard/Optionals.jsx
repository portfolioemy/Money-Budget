import React from "react";
import { additionalExpense, useAPIContext } from "../../context/ApiContext";
import styles from "../../style/Dashboard.module.css";

const Optionals = () => {
  const { addExpense } = useAPIContext();
  
  return (
    <div className={styles.optionalsContainer}>
      <div>
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
                  onClick={() => addExpense(expense)}
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Optionals;
