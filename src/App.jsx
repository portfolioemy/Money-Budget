/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./route/Route";
import { APIProvider } from "./context/ApiContext";

function App() {
  return (
    <APIProvider>
        <AppRoutes />
    </APIProvider>
  );
}

export default App;
