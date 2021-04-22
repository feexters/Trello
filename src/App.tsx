import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";
import { Login } from "./components/Login/index";
import { Table } from "./components/Table/index";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Login />
        <Table />
      </PersistGate>
    </Provider>
    )
};

export default App;
