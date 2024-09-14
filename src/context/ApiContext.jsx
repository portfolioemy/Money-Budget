import React from "react";
import PropTypes from 'prop-types';

export const APIContext = React.createContext();

export const APIProvider = ({ children }) => {
  const [userData, setUserData] = React.useState({});
  const [expenses, setExpenses] = React.useState([]);
  const [currentExpense, setCurrentExpense] = React.useState(null);

  React.useMemo(() => {
    if(localStorage.getItem("user")!==JSON.stringify(userData))
      localStorage.setItem("user", JSON.stringify(userData));
    if(localStorage.getItem("expenses")!==JSON.stringify(expenses))
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [userData,expenses]);

  const getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const addExpense = (expense) => {
    setExpenses((preValue)=>[...preValue, { id: Date.now().toString(), ...expense }]);
};

const updateExpense = (updatedExpense) => {
  setExpenses(expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
  ));
};

const deleteExpense = (id) => {
  setExpenses(expenses.filter((expense) => expense.id !== id));
};

const selectExpenseToEdit = (expense) => {
  setCurrentExpense(expense);
};

  return (
    <APIContext.Provider value={{
      userData,
            setUserData,
            getUserData,
            expenses,
            addExpense,
            updateExpense,
            deleteExpense,
            currentExpense,
            selectExpenseToEdit
        }}>
      {children}
    </APIContext.Provider>
  );
};

APIProvider.propTypes={
  children:PropTypes.element.isRequired
}

APIProvider.defaultProps={
  children:()=>(<></>)
}

export const useAPIContext = () => {
  return React.useContext(APIContext);
};

