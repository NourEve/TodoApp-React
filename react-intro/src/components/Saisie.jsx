import React, { useRef, useState } from "react";

const Saisie = ({ addTodo }) => {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    const inputValue = inputElement.value;
    addTodo(inputValue);
  }

  return (
    <div className="saisie">
      <input
        className="saisie__input"
        ref={inputRef}
        type="text"
        placeholder="Write a new todo"
      />
      <br />
      <button className="saisie__button" onClick={clickHandler}>
        Add todo
      </button>
    </div>
  );
};

export default Saisie;
