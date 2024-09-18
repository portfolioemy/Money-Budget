import React from "react";
import PropTypes from "prop-types";
import HobbyGlyph from "../components/icons/HobbyGlyph";
import FoodGlyph from "../components/icons/FoodGlyph";
import RentGlyph from "../components/icons/RentGlyph";
import SavingGlyph from "../components/icons/SavingGlyph";
import SaludGlyph from "../components/icons/SaludGlyph";
import DebtsGlyph from "../components/icons/DebtsGlyph";
import SubscriptionGlyph from "../components/icons/SubscriptionGlyph";
import OtherGlyph from "../components/icons/OthersGlyph";

export const APIContext = React.createContext();


export const APIProvider = ({ children }) => {
  const [userData, setUserData] = React.useState(() => {
    const storedUserData = localStorage.getItem("user");
    return storedUserData ? JSON.parse(storedUserData) : {};
  });

  const resetExpenses = () => {
    setExpenses([]);
    localStorage.removeItem("expenses"); 
  };

  const [expenses, setExpenses] = React.useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const [currentExpense, setCurrentExpense] = React.useState(null);

  React.useEffect(() => {
    if (
      JSON.stringify(userData) !== "{}" &&
      localStorage.getItem("user") !== JSON.stringify(userData)
    ) {
      localStorage.setItem("user", JSON.stringify(userData));
    }
    if (
      JSON.stringify(expenses) !== "[]" &&
      localStorage.getItem("expenses") !== JSON.stringify(expenses)
    ) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [userData, expenses]);

  const getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const getExpeses = () => {
    return JSON.parse(localStorage.getItem("expenses"));
  };

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...expense,
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const selectExpenseToEdit = (expense) => {
    setCurrentExpense(expense);
  };

  return (
    <APIContext.Provider
      value={{
        userData,
        setUserData,
        getUserData,
        getExpeses,
        addExpense,
        updateExpense,
        deleteExpense,
        currentExpense,
        selectExpenseToEdit,
        expenses,
        categories,
        resetExpenses
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

APIProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

APIProvider.defaultProps = {
  children: () => <></>,
};

export const useAPIContext = () => {
  return React.useContext(APIContext);
};

export const categories = [
  { id: "1", name: "Hobbies", icon: <HobbyGlyph /> },
  { id: "2", name: "Food", icon: <FoodGlyph /> },
  { id: "3", name: "Rent", icon: <RentGlyph /> },
  { id: "4", name: "Debts", icon: <DebtsGlyph /> },
  { id: "5", name: "Saving", icon: <SavingGlyph /> },
  { id: "6", name: "Salud", icon: <SaludGlyph /> },
  { id: "7", name: "Subscription", icon: <SubscriptionGlyph /> },
  { id: "8", name: "Others", icon: <OtherGlyph /> },
];
