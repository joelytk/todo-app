import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import TodoProvider from '@/contexts/TodoContext';

import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
