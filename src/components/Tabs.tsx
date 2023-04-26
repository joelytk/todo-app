import type { FC } from 'react';

import type TabType from '@/interfaces/Tab';
import Tab from './Tab';

interface TabsProps {
  tabs: TabType[];
  activeTabIndex: number;
  handleTabChange: (tabIndex: number) => void;
}

const Tabs: FC<TabsProps> = ({ tabs, activeTabIndex, handleTabChange }) => {
  return (
    <ul className='tabs'>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          tab={tab}
          isActive={tab.id === activeTabIndex}
          handleTabChange={handleTabChange}
        />
      ))}
    </ul>
  );
};

export default Tabs;
