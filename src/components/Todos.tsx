import { XMarkIcon } from '@heroicons/react/24/solid';
import type { ChangeEvent, FC, KeyboardEvent } from 'react';
import { useContext, useState } from 'react';

import { TodoContext } from '@/contexts/TodoContext';
import type TodoType from '@/interfaces/Todo';

interface TodosProps {
  todos: TodoType[];
}

const Todos: FC<TodosProps> = ({ todos }) => {
  return (
    <ul className='mb-4'>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

interface TodoProps {
  todo: TodoType;
}

const Todo: FC<TodoProps> = ({ todo }) => {
  const { toggleTodo, editTodo, deleteTodo, selectedId, setSelectedId } =
    useContext(TodoContext);
  const [value, setValue] = useState('');

  const { id, text, completed } = todo;

  const handleDoubleClick = (id: number) => () => {
    setSelectedId(id);
    setValue(text);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (id: number) => (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit(id);
    }
  };

  const handleEdit = (id: number) => {
    if (value !== '') {
      editTodo({
        id,
        text: value
      });
    } else {
      deleteTodo(id);
    }

    setSelectedId(0);
  };

  return (
    <li
      className={`flex items-center px-4 py-2 border-b last-of-type:border-b-0 border-white cursor-pointer ${
        completed ? ' line-through' : ''
      }`}
      onClick={() => toggleTodo(id)}
    >
      <div className='todo-container'>
        <input type='checkbox' checked={completed} readOnly hidden />
        <span className='checkbox' onClick={() => toggleTodo(id)}></span>
        <label className='todo-label' onDoubleClick={handleDoubleClick(id)}>
          {text}
        </label>
        {selectedId === id && (
          <input
            className='todo-input'
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown(id)}
            onBlur={() => handleEdit(id)}
            autoFocus
          />
        )}
      </div>

      {selectedId !== id && (
        <button className='btn close-btn' onClick={() => deleteTodo(id)}>
          <XMarkIcon />
        </button>
      )}
    </li>
  );
};

export default Todos;
