const Tab = ({ tab, isActive, handleTabChange }) => {
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
