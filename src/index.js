import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/todoApp";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
