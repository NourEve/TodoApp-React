import React from "react";
import { useOutletContext } from "react-router-dom";

const ListTodoFinished = () => {
  const [todos, checkHandler] = useOutletContext();
  return (
    <div className="todo">
      <h2 className="todo__title">Todos finished</h2>
      <ul>
        {todos.map((todo, index) =>
          todo.completed ? (
            <li key={index} className={index % 2 === 0 ? "even" : "odd"}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => checkHandler(todo.id)}
              />
              <label className={index % 2 === 0 ? "even" : "odd"}>
                {todo.todo}
              </label>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ListTodoFinished;
