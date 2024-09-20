import React from "react";
import { categories, useAPIContext } from "../../context/ApiContext.jsx";
import ExpenseCard from "../../components/cards/ExpenseCard.jsx";
import styles from "../../style/Dashboard.module.css"

const ExpensesList = () => {
  const { getExpeses,expenses } = useAPIContext();
  const [names, setNames] = React.useState([]);
  const [selectedName, setSelectedName] = React.useState("");
  const [filteredExpenses, setFilteredExpenses] = React.useState(getExpeses()?.filter(
    (expense) => selectedName === "" || expense.expense === selectedName
  ));

  React.useMemo(() => {
    setFilteredExpenses(expenses)
    setNames(expenses?.map((expense) => expense.expense));
  }, [expenses]);

  const handleSelectChange = (e) => {
    setSelectedName(e.target.value);
  };


  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.descriptionHeader}>
        <h2 className={styles.headerTitle}>Expenses Overview</h2>
        <select className={styles.selector} onChange={handleSelectChange} value={selectedName}>
          <option value="">All</option>
          {names?.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {filteredExpenses?.length > 0 ? (
        <ul>
          {filteredExpenses?.map((expense, index) => (
              <li key={index}>
                {(expense.category===-1 ) ? expense?.icon : (categories.find((item) => item.id === expense.category)?.icon)}{" "}
                <ExpenseCard expense={expense} /> 
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyMessage}>
          <p>Looks like you haven't added any <span className={styles.highlight}>expenses</span> yet.</p>
          <p>No worries, just hit the <span className={styles.highlight}>'New Expense'</span> button to get started.</p>
        </div>
      )}
    </div>
  );
};

export default ExpensesList;
