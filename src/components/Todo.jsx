import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';

import { TodoContext } from '@/contexts/TodoContext';

const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <li
      className={`todo-item${todo.completed ? ' completed' : ''}`}
      // onClick={() => toggleTodo(todo.id)}
    >
      {todo.message}

      <button className='icon-btn' onClick={() => deleteTodo(todo.id)}>
        <MdDelete fill='red' />
      </button>
    </li>
  );
};

export default Todo;
