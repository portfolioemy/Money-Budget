import React from "react";
import PropTypes from 'prop-types';
import HobbyGlyph from "../components/icons/HobbyGlyph";
import FoodGlyph from "../components/icons/FoodGlyph";

export const APIContext = React.createContext();

export const APIProvider = ({ children }) => {
  const [userData, setUserData] = React.useState({});
  const [expenses, setExpenses] = React.useState([]);
  const [currentExpense, setCurrentExpense] = React.useState(null);

  React.useMemo(() => {
    if(localStorage.getItem("user")!==JSON.stringify(userData) && JSON.stringify(userData)!=='{}')
      localStorage.setItem("user", JSON.stringify(userData));
    if(localStorage.getItem("expenses")!==JSON.stringify(expenses) && JSON.stringify(expenses)!=='[]')
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [userData,expenses]);

  const getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const getExpeses = () => {
    return JSON.parse(localStorage.getItem("expenses"));
  };

  const addExpense = (expense) => {
    setExpenses([...(localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[]), { createdAt: Date.now().toString(), ...expense }]);
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
            getExpeses,
            addExpense,
            updateExpense,
            deleteExpense,
            currentExpense,
            selectExpenseToEdit,
            expenses
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

export const categories=[
  {id:"1",name:'Hobbies', icon:<HobbyGlyph/>},
  {id:"2",name:'Food', icon:<FoodGlyph/>},
  {id:"3",name:'Rent', icon:<HobbyGlyph/>},
  {id:"4",name:'Debits', icon:<HobbyGlyph/>},
  {id:"5",name:'Saving', icon:<HobbyGlyph/>},
  {id:"6",name:'Health', icon:<HobbyGlyph/>},
]