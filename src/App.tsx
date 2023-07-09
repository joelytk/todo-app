import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import {
  FC,
  KeyboardEvent,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';

import { Footer, Todos } from '@/components';
import { ThemeContext, TodoContext } from '@/contexts';
import type TodoType from '@/interfaces/Todo';

import './index.css';

const App: FC = () => {
  const { todos, addTodo } = useContext(TodoContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      let message = inputRef.current!.value;

      if (message !== '') {
        addTodo(message);
        inputRef.current!.value = '';
      }
    }
  };

  useEffect(() => {
    switch (activeTabIndex) {
      case 1:
        setFilteredTodos(todos);
        break;
      case 2:
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      case 3:
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      default:
        break;
    }
  }, [activeTabIndex, todos]);

  const handleTabChange = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className='fixed top-3 right-3 w-10 h-10 p-2.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg'
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>

      <div className='container mt-10 max-w-screen-sm mx-auto px-4'>
        <h1 className='text-6xl mb-6 text-center'>Todos</h1>
        <input
          ref={inputRef}
          className='w-full px-4 py-2 mb-4 rounded ring-1 ring-inset ring-zinc-300 focus:ring-1 focus:ring-inset focus:ring-zinc-400 dark:text-zinc-800'
          placeholder='Add a todo...'
          onKeyDown={handleSubmit}
        />
        {todos.length > 0 && (
          <>
            <Todos todos={filteredTodos} />
            <Footer
              activeTabIndex={activeTabIndex}
              handleTabChange={handleTabChange}
            />
          </>
        )}
      </div>
    </>
  );
};

export default App;
