import React from "react";

const TodoForm = ({ title, onTitleChange, onAdd }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={onTitleChange}
      />
      <button onClick={onAdd}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
