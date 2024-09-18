import React from "react";
import StandardButton from "../../components/buttons/StandardButton";
import Modal from "../../components/modals/Modal";
import Header from "../../components/Header/Header"
import ExpensesList from "./ExpensesList";
import Calculation from "./Calculation";
import Optionals from "./Optionals";

const Dashboard = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
    <Header/>
    <ExpensesList/>
    <Calculation/>
    <Optionals/>
      
    </>
  );
};
export default Dashboard;
