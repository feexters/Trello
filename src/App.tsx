import React from "react";
import { DataProvider } from "./components/context/index";
import { Login } from "./components/login/index";
import { Table } from "./components/table/index";
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
