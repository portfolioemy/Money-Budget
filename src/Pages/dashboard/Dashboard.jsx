import React from "react";
import StandardButton from "../../components/buttons/StandardButton";
import Modal from "../../components/modals/Modal";
import Header from "../../components/Header/Header"
import ExpensesList from "./ExpensesList";
import Calculation from "./Calculation";
import Optionals from "./Optionals";
import  styles from "../../style/Dashboard.module.css"

const Dashboard = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
     <>
     <Header />
     <div className={styles.dashboardBody}>
     <ExpensesList />
     <Calculation />
     <Optionals />
     </div>
   </>
  );
};
export default Dashboard;
