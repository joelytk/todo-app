import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
