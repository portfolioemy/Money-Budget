import "../../style/Description.module.css";
import "../../style/WelcomePage.module.css";
import React from 'react';
import StandardButton from "../../components/buttons/StandardButton.jsx";
import { categories, useAPIContext } from "../../context/ApiContext.jsx";

const ExpensesList = () => {
    const {getExpeses} =useAPIContext()
    const [selectedName, setSelectedName] = React.useState('');

    const uniqueNames = React.useMemo(() => {
        const names = getExpeses()?.map(expense => expense.expense);
        return Array.from(new Set(names)); 
    }, [localStorage.getItem("expenses")]);

    const handleSelectChange = (e) => {
        setSelectedName(e.target.value);
    };

    const filteredExpenses = getExpeses()?.filter(expense => 
        selectedName === '' || expense.expense === selectedName
    );

    return (
        <div className="descriptionContainer">
            <div className="descriptionHeader">
                <h2>Description</h2>
                <select onChange={handleSelectChange} value={selectedName}>
                <option value="">All</option>
                {uniqueNames?.map((name, index) => (
                    <option key={index} value={name}>{name}</option>
                ))}
            </select>
            </div>
            
            {filteredExpenses?.length > 0 ? (
                <ul>
                    {filteredExpenses?.map((expense, index) => (
                        <li key={index}>{categories.find((item)=>item.id===expense.category)?.icon} <div>{expense?.expense} - ${expense?.amount}</div></li>
                    ))}
                </ul>
            ) : (
                <div>
                    <p>Looks like you haven't added any <span>expenses yet.</span></p>
                    <p>No worries, just hit the</p>
                    <StandardButton />
                    <p>button to get started</p>
                </div>
            )}
        </div>
    );
};

export default ExpensesList;
