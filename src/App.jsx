import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMassage";


import useTodos from "./Hook/useTodo";
import "./App.css";

function App() {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  if (loading) {
    return (
      <div className="app-container">
        <LoadingSpinner />
      </div>
    );
  }

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.length - completedTodos;

  const handleAddTodo = () => {
    addTodo(newTodoTitle);
    setNewTodoTitle("");
    setModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">Todo List</h1>
      </div>

      {error && <ErrorMessage message={error} />}

      <div className="todo-list">
        {todos.length === 0 ? (
          <div style={{ textAlign: "center", color: "#666", padding: "2rem" }}>
            <p>No todos yet. Add one above!</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>

      <div className="todo-actions">
        <button onClick={() => setModalOpen(true)}>Add Todo</button>
      </div>

      {todos.length > 0 && (
        <div className="stats-container">
          <h3 style={{ margin: 0, color: "#2c3e50" }}>Todo Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{completedTodos}</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{pendingTodos}</div>
              <div className="stat-label">Pending</div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for adding a todo */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Todo"
      >
        <TodoForm
          title={newTodoTitle}
          onTitleChange={(e) => setNewTodoTitle(e.target.value)}
          onAdd={handleAddTodo}
        />
      </Modal>
    </div>
  );
}

export default App;
