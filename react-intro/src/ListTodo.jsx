import React, { useState} from 'react';

const ListTodo = ( {todos, checkHandler} ) => {
      

      return (
            <div>
                  <h2>Todos</h2>
                  <ul>
                  {todos.map((todo, index) => (
                        <li key={index}>
                              <input type="checkbox" checked={todo.completed} onChange={() => checkHandler(todo.id)} /> 
                              <label>{todo.todo}</label>
                        </li>
                  ))}
                  </ul>
            </div>
      );
};

export default ListTodo;