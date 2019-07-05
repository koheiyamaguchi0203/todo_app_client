import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoListPage from "./TodoListPage";
import * as serviceWorker from "./serviceWorker";

const todoItems = [
  {
    id: 1,
    title: "買い物に行く"
  },
  {
    id: 2,
    title: "デートする"
  },
  {
    id: 3,
    title: "サバゲーする"
  },
  {
    id: 4,
    title: "プログラミングする"
  }
];
ReactDOM.render(
  <TodoListPage todoItems={todoItems} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();