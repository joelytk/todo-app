import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import TodoProvider from '@/contexts/TodoContext';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
