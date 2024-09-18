import React, { useContext } from "react";
import { APIContext } from "../../context/ApiContext";
import netflex from "../../assets/image.svg";

import { FaSpotify, FaAmazon, FaGoogle, FaFacebook } from "react-icons/fa";

const Optionals = () => {
  const { addSubscription } = useContext(APIContext);

  const fixedExpenses = [
    {
      name: "NETFLIX",
      price: 12.99,
      icon: <img src={netflex} alt="Netflix" width={40} />,
    },
    {
      name: "SPOTIFY",
      price: 9.99,
      icon: <FaSpotify size={40} color="#1DB954" />,
    },
    {
      name: "AMAZON",
      price: 15.99,
      icon: <FaAmazon size={40} color="#ff9900" />,
    },
    {
      name: "GOOGLE",
      price: 19.99,
      icon: <FaGoogle size={40} color="#4285F4" />,
    },
    {
      name: "FACEBOOK",
      price: 5.99,
      icon: <FaFacebook size={40} color="#1877F2" />,
    },
  ];

  const handleAddSubscription = (expenseName, expensePrice) => {
    if (expensePrice) {
      addSubscription(expenseName, expensePrice);
    } else {
      console.error(`Price is missing for ${expenseName}`);
    }
  };

  return (
    <div className="optionalsContainer">
      <div>
        <h2>Optionals</h2>
        <div className="fixedExpenses">
          <h3>CHOOSE ANY ADDITIONAL EXPENSES</h3>
          <ul>
            {fixedExpenses.map((expense, index) => (
              <li key={index} className="expenseItem">
                <div className="expenseIcon">{expense.icon}</div>
                <span>{expense.name}</span>
                <button
                  className="selectButton"
                  onClick={() =>
                    handleAddSubscription(expense.name, expense.price)
                  }
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
