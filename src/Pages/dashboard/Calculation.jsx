import React, { useContext, useEffect } from "react";
import { APIContext } from "../../context/ApiContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StandardButton from "../../components/buttons/StandardButton";

const Calculation = () => {
    const { userData, expenses, resetExpenses } = useContext(APIContext);


  useEffect(() => {
    console.log("Expenses:", expenses);
    console.log("Income:", userData?.income);
  }, [expenses, userData]);

  const totalIncome = parseFloat(userData?.income) || 1;
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );
  const spentPercentage = Math.min((totalExpenses / totalIncome) * 100, 100);

  return (
    <div className="calculationContainer">
      <h2>Calculation</h2>
      <div className="calculationIncome">
        <p>Income</p>
        <p>${userData?.income || 0}</p>
      </div>

      <div style={{ width: "100px", margin: "0 auto" }}>
        <CircularProgressbar
          value={spentPercentage}
          text={`${Math.round(spentPercentage)}% Spent`}
          styles={buildStyles({
            pathColor: "green",
            trailColor: "red",
            textColor: "#fff",
          })}
        />
      </div>
      <div>
        <p>Availble:${totalExpenses - totalIncome}</p>
        <p>Spent: ${totalExpenses}</p>
      </div>
      <StandardButton
            label="Reset Expenses"
            customClass={"secondary"}
            hasIcon
            onClick={resetExpenses}
          />

    </div>
  );
};

export default Calculation;
