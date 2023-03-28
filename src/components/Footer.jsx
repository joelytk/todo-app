import { useContext } from 'react';

import ClearButton from './ClearButton';
import Counter from './Counter';
import Tabs from './Tabs';

import { TodoContext } from '@/contexts/TodoContext';

const Footer = ({ activeTabIndex, handleTabChange }) => {
  const { completedTodos } = useContext(TodoContext);

  const tabs = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Active' },
    { id: 3, label: 'Completed' }
  ];

  return (
    <footer className='footer'>
      <Counter />
      <Tabs
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        handleTabChange={handleTabChange}
      />
      {completedTodos.length > 0 && <ClearButton />}
    </footer>
  );
};

export default Footer;
