import React, { useRef, useState } from 'react';

const Saisie = ( {addTodo}) => {
      const inputRef = useRef();


  function clickHandler() {
    const inputElement = inputRef.current;
      const inputValue = inputElement.value;
      addTodo(inputValue);

  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
};

export default Saisie;