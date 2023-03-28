import { useContext } from 'react';

import { TodoContext } from '@/contexts/TodoContext';

const Counter = () => {
  const { activeTodos } = useContext(TodoContext);

  return (
    <p className='counter'>
      {activeTodos.length} item{activeTodos.length !== 1 && 's'} left
    </p>
  );
};

export default Counter;
