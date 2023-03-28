import { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    setTodos(todos ? JSON.parse(todos) : []);
  }, []);

  useEffect(() => {
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        activeTodos,
        completedTodos,
        clearCompleted,
        toggleTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
