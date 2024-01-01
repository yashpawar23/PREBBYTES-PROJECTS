import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from '../ToDolist/TodoSlice'

const TodoListData = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo({ id: Date.now(), title: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleToggleComplete = todo => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add a new to-do"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleComplete(todo)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListData;