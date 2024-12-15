import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
