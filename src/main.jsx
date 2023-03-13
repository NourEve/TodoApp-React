import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListTodo from "./components/ListTodo";
import ListTodoFinished from "./components/ListTodoFinished";
import "./styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: "",
        element: <ListTodo />,
      },
      {
        path: "todo-finished",
        element: <ListTodoFinished />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
