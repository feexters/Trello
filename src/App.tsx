import React from "react";
import { DataProvider } from "./components/Context/index";
import { Login } from "./components/Login/index";
import { Table } from "./components/Table/index";
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
