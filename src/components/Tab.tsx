import TabType from '@/interfaces/Tab';
import type { FC } from 'react';

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

export default Tab;
