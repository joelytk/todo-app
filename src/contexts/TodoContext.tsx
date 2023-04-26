import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { createContext, useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';
import type TodoType from '@/interfaces/Todo';

interface TodoContextType {
  todos: TodoType[];
  activeTodos: TodoType[];
  completedTodos: TodoType[];
  selectedId: number;
  setSelectedId: Dispatch<SetStateAction<number>>;
  addTodo: (text: string) => void;
  editTodo: ({ id, text }: { id: number; text: string }) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  completeAllTodos: Function;
  clearCompleted: Function;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  activeTodos: [],
  completedTodos: [],
  selectedId: 0,
  setSelectedId: () => {},
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
  completeAllTodos: () => {},
  clearCompleted: () => {}
});

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [selectedId, setSelectedId] = useState<number>(0);

  const activeTodos: TodoType[] = todos.filter(
    (todo: TodoType) => !todo.completed
  );
  const completedTodos: TodoType[] = todos.filter(
    (todo: TodoType) => todo.completed
  );

  const addTodo = (text: string) => {
    setTodos([
      {
        id: Date.now(),
        text,
        completed: false
      },
      ...todos
    ]);
  };

  const editTodo = ({ id, text }: { id: number; text: string }) => {
    setTodos(
      todos.map((todo: TodoType) => (id === todo.id ? { ...todo, text } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo: TodoType) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo: TodoType) =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const completeAllTodos: Function = () => {
    if (completedTodos.length === todos.length) {
      setTodos(todos.map((todo: TodoType) => ({ ...todo, completed: false })));
    } else {
      setTodos(todos.map((todo: TodoType) => ({ ...todo, completed: true })));
    }
  };

  const clearCompleted: Function = () => {
    setTodos(todos.filter((todo: TodoType) => !todo.completed));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        activeTodos,
        completedTodos,
        selectedId,
        setSelectedId,
        addTodo,
        editTodo,
        deleteTodo,
        toggleTodo,
        completeAllTodos,
        clearCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
