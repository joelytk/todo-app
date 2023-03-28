import Tab from './Tab';

const Tabs = ({ tabs, activeTabIndex, handleTabChange }) => {
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
