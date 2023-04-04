import { useContext, useState } from 'react';
import { BsXLg } from 'react-icons/bs';

import { TodoContext } from '@/contexts/TodoContext';

const Todo = ({ todo }) => {
  const { toggleTodo, editTodo, deleteTodo, selectedId, setSelectedId } =
    useContext(TodoContext);
  const [value, setValue] = useState('');

  const { id, message, completed } = todo;

  const handleDoubleClick = id => () => {
    setSelectedId(id);
    setValue(message);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleKeyDown = id => e => {
    if (e.key === 'Enter') {
      handleEdit(id);
    }
  };

  const handleEdit = id => {
    if (value !== '') {
      editTodo({
        id,
        message: value
      });
    } else {
      deleteTodo(id);
    }

    setSelectedId('');
  };

  return (
    <li className={`todo-item${completed ? ' completed' : ''}`}>
      <div className='todo-container'>
        <input type='checkbox' checked={completed} readOnly hidden />
        <span className='checkbox' onClick={() => toggleTodo(id)}></span>
        <label className='todo-label' onDoubleClick={handleDoubleClick(id)}>
          {message}
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
          <BsXLg />
        </button>
      )}
    </li>
  );
};

export default Todo;
