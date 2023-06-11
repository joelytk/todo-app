import type { FC } from 'react';

import type TabType from '@/interfaces/Tab';

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

interface TabProps {
  tab: TabType;
  isActive: boolean;
  handleTabChange: (tabIndex: number) => void;
}

const Tab: FC<TabProps> = ({ tab, isActive, handleTabChange }) => {
  return (
    <li
      className={`tab-item${isActive ? ' active' : ''}`}
      onClick={() => handleTabChange(tab.id)}
    >
      {tab.label}
    </li>
  );
};

export default Tabs;
