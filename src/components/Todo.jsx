import { useContext } from 'react';
import { BsXLg } from 'react-icons/bs';

import { TodoContext } from '@/contexts/TodoContext';

const Todo = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <div className='todo-container'>
        <input type='checkbox' checked={todo.completed} readOnly hidden />
        <span className='checkbox' onClick={() => toggleTodo(todo.id)}></span>
        <label className='todo-label'>{todo.message}</label>
      </div>

      <button className='icon-btn' onClick={() => deleteTodo(todo.id)}>
        <BsXLg />
      </button>
    </li>
  );
};

export default Todo;
