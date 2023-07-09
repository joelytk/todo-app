import type { FC } from 'react';

import type TabType from '@/interfaces/Tab';

interface TabsProps {
  tabs: TabType[];
  activeTabIndex: number;
  handleTabChange: (tabIndex: number) => void;
}

const Tabs: FC<TabsProps> = ({ tabs, activeTabIndex, handleTabChange }) => {
  return (
    <nav className='flex items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          tab={tab}
          isActive={tab.id === activeTabIndex}
          handleTabChange={handleTabChange}
        />
      ))}
    </nav>
  );
};

interface TabProps {
  tab: TabType;
  isActive: boolean;
  handleTabChange: (tabIndex: number) => void;
}

const Tab: FC<TabProps> = ({ tab, isActive, handleTabChange }) => {
  return (
    <a
      className={`px-2 py-1 rounded cursor-pointer${
        isActive
          ? ' bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800'
          : ''
      }`}
      onClick={() => handleTabChange(tab.id)}
    >
      {tab.label}
    </a>
  );
};

export default Tabs;
