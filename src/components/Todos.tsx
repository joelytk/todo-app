import type TodoType from '@/interfaces/Todo';
import type { FC } from 'react';
import Todo from './Todo';

interface TodosProps {
  todos: TodoType[];
}

const Todos: FC<TodosProps> = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
