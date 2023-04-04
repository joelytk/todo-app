import { useContext } from 'react';

import { TodoContext } from '@/contexts/TodoContext';

const ClearButton = () => {
  const { clearCompleted } = useContext(TodoContext);

  return (
    <button
      onClick={clearCompleted}
      className='btn btn-link clear-completed-btn'
    >
      Clear Completed
    </button>
  );
};

export default ClearButton;
