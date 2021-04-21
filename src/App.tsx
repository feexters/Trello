import React from "react";
import { Provider } from "react-redux";
import { store } from "store";
import { DataProvider } from "./components/Context/index";
import { Login } from "./components/Login/index";
import { Table } from "./components/Table/index";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <DataProvider>
        <Login />
        <Table />
      </DataProvider>
    </Provider>
    )
};

export default App;
