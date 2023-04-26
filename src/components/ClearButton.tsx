import type { FC } from 'react';
import { useContext } from 'react';

import { TodoContext } from '@/contexts/TodoContext';

const ClearButton: FC = () => {
  const { clearCompleted } = useContext(TodoContext);

  return (
    <button
      onClick={() => clearCompleted()}
      className='btn btn-link clear-completed-btn'
    >
      Clear Completed
    </button>
  );
};

export default ClearButton;
