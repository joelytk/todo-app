import { createContext, useRef } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const counter = useRef(1);

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  const addTodo = message => {
    const getMax = todos.reduce((acc, item) => Math.max(acc, item.id), 0);

    setTodos([
      {
        id: getMax + 1,
        message,
        completed: false
      },
      ...todos
    ]);
    counter.current += 1;
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const completeAllTodos = () => {
    if (completedTodos.length === todos.length) {
      setTodos(todos.map(todo => ({ ...todo, completed: false })));
    } else {
      setTodos(todos.map(todo => ({ ...todo, completed: true })));
    }
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        activeTodos,
        completedTodos,
        addTodo,
        toggleTodo,
        completeAllTodos,
        deleteTodo,
        clearCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
