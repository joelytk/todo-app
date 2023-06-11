import type { FC } from 'react';
import { useContext } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

import { ThemeContext } from '@/contexts/ThemeContext';

const ThemeToggleButton: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className='btn theme-toggle-btn'>
      {theme === 'dark' ? <BsSun /> : <BsMoonStars />}
    </button>
  );
};

export default ThemeToggleButton;
