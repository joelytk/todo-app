import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import TodoProvider from '@/contexts/TodoContext';

import App from './App';
import ThemeProvider from './contexts/ThemeContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>
);
