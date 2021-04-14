import React, { useState } from "react";
import DataProvider from "./components/DataContext";
import Login from "./components/Login";
import Table from "./components/Table";
import './localStorage'

const App: React.FC = () => {
  return (
    <DataProvider>
      <Login />
      <Table />
    </DataProvider>
    )
};

export default App;
