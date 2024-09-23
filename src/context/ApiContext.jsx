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
import AmazonGlyph from "../components/icons/AmazonGlyph"
import FacebookGlyph from "../components/icons/FacebookGlyph";
import NetflixGlyph from "../components/icons/NetflixGlyph";
import SpotifyGlyph from "../components/icons/SpotifyGlyph";
import GoogleGlyph from "../components/icons/GoogleGlyph";


export const APIContext = React.createContext();

export const APIProvider = ({ children }) => {
  const getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const getExpeses = () => {
    return JSON.parse(localStorage.getItem("expenses"));
  };
  const [userData, setUserData] = React.useState(() => {
    const storedUserData = getUserData()
    return storedUserData ? storedUserData : {};
  });

  const [expenses, setExpenses] = React.useState(() => {
    const storedExpenses = getExpeses()
    return storedExpenses ? storedExpenses : [];
  });

  const [currentExpense, setCurrentExpense] = React.useState(null);

  React.useEffect(() => {
      localStorage.setItem("user", JSON.stringify(userData));

      localStorage.setItem("expenses", JSON.stringify(expenses));

  }, [userData, expenses]);



  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...expense,
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    // localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    // localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    // localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const selectExpenseToEdit = (expense) => {
    setCurrentExpense(expense);
  };

  const resetExpenses = () => {
    setExpenses([]);
    localStorage.removeItem("expenses");
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
        resetExpenses,
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
export const additionalExpense = [
  { id: "1", expense: "Amazon",amount:5, category:-1, icon: <AmazonGlyph /> },
  { id: "2", expense: "Facebook",amount:5, category:-1,  icon: <FacebookGlyph /> },
  { id: "3", expense: "Netflex", amount:5, category:-1, icon: <NetflixGlyph /> },
  { id: "4", expense: "Spotify",amount:5, category:-1,  icon: <SpotifyGlyph /> },
  { id: "5", expense: "Google",amount:5, category:-1,  icon: <GoogleGlyph /> },
];