import React, { useContext } from "react";
import { APIContext } from "../../context/ApiContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StandardButton from "../../components/buttons/StandardButton";
import styles from "../../style/Dashboard.module.css";

const Calculation = () => {
    const { userData, expenses, resetExpenses } = useContext(APIContext);

    const totalIncome = parseFloat(userData?.income) || 1;
    const totalExpenses = expenses?.reduce((sum, item) => sum + parseFloat(item.amount), 0) || 0;
    const spentPercentage = Math.min((totalExpenses / totalIncome) * 100, 100);

    return (
        <div className={styles.calculationContainer}>
            <h2 className={styles.calculationTitle}>Budget Overview</h2>
            <div className={styles.incomeDisplay}>
                <span>Income:</span>
                <span>${userData?.income || 0}</span>
            </div>

            <div className={styles.progressbarContainer}>
                <CircularProgressbar
                    value={spentPercentage}
                    text={`${Math.round(spentPercentage)}% Spent`}
                    styles={buildStyles({
                        pathColor: spentPercentage > 75 ? "#ff0000" : "#51d289",
                        trailColor: "#ddd",
                        textColor: "#333",
                        textSize: "0.9rem"
                    })}
                />
            </div>
            <div className={styles.budgetInfo}>
                <p>Available: ${totalIncome - totalExpenses}</p>
                <p>Spent: ${totalExpenses}</p>
            </div>
            <StandardButton
                label="Reset Expenses"
                customClass={"secondary"}

                onClick={resetExpenses}
            />
             
        </div>
    );
};

export default Calculation;
