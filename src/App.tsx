import React from "react";
import { Provider } from "react-redux";
import { store } from "store";
import { Login } from "./components/Login/index";
import { Table } from "./components/Table/index";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Login />
      <Table />
    </Provider>
    )
};

export default App;
