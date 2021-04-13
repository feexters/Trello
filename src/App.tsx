import React from "react";
import DataProvider from "./components/DataContext";
import Table from "./components/Table";
import './localStorage'

const App: React.FC = () => {
  return (
    <DataProvider>
      <Table />
    </DataProvider>
    )
};

export default App;
