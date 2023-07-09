import type { FC } from 'react';
import { useContext } from 'react';

import Tabs from './Tabs';

import { TodoContext } from '@/contexts/TodoContext';
import type TabType from '@/interfaces/Tab';

interface FooterProps {
  activeTabIndex: number;
  handleTabChange: (tabIndex: number) => void;
}

const Footer: FC<FooterProps> = ({ activeTabIndex, handleTabChange }) => {
  const { activeTodos, completedTodos, clearCompleted } =
    useContext(TodoContext);

  const tabs: TabType[] = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Active' },
    { id: 3, label: 'Completed' }
  ];

  return (
    <footer className='flex justify-between items-center text-xs relative'>
      <p className='counter'>
        {activeTodos.length} item{activeTodos.length !== 1 && 's'} left
      </p>
      <Tabs
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        handleTabChange={handleTabChange}
      />
      {completedTodos.length > 0 && (
        <button
          onClick={() => clearCompleted()}
          className='btn btn-link clear-completed-btn'
        >
          Clear Completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
