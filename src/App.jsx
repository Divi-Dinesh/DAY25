import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Completed');
  const [filter, setFilter] = useState('All');

  const addTodo = () => {
    if (task) {
      const newTodo = {
        id: Date.now(),
        task: task,
        description: description,
        status: status,
      };
      setTodos([...todos, newTodo]);
      setTask('');
      setDescription('');
      setStatus('Not Completed');
    }
  };

  const updateTodo = (id, updatedStatus) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: updatedStatus };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Completed') return todo.status === 'Completed';
    if (filter === 'Not Completed') return todo.status === 'Not Completed';
    return true;
  });

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <div>
        {filteredTodos.map((todo) => (
          <div key={todo.id}>
            <div>
              <strong>{todo.task}</strong>
              <p>{todo.description}</p>
              <p>Status: {todo.status}</p>
            </div>
            <div>
              <button onClick={() => updateTodo(todo.id, 'Completed')}>
                Mark as Completed
              </button>
              <button onClick={() => updateTodo(todo.id, 'Not Completed')}>
                Mark as Not Completed
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;

