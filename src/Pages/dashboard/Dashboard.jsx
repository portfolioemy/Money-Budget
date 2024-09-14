import React from "react";
import StandardButton from "../../components/buttons/StandardButton";
import Modal from "../../components/modals/Modal";
import Header from "../../components/Header/Header"
import ExpensesList from "./ExpensesList";

const Dashboard = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  // const handleClick = () => {
  //   console.log("Button Clicked on Dashboard!");
  // };

  return (
    <>
    <Header/>
    <ExpensesList/>
      {/* <StandardButton
        label="New Expenses"
        onClick={() => {
          setModalVisible(true);
        }}
        customClass={'secondary'}
      ></StandardButton>
      <Modal visible={modalVisible} setVisible={setModalVisible}></Modal> */}
    </>
  );
};
export default Dashboard;
