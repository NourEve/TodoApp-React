import React from "react";
import { useOutletContext } from "react-router-dom";

const ListTodoFinished = () => {
  const [todos, checkHandler] = useOutletContext();
  return (
    <div>
      <h2>Todos finished</h2>
      <ul>
        {todos.map((todo, index) =>
          todo.completed ? (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => checkHandler(todo.id)}
              />
              <label>{todo.todo}</label>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ListTodoFinished;
