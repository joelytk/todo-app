import type { FC } from 'react';
import { useContext, useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Header from '@/components/Header';
import Todos from '@/components/Todos';
import { TodoContext } from '@/contexts/TodoContext';
import type TodoType from '@/interfaces/Todo';

import './index.css';

const App: FC = () => {
  const { todos } = useContext(TodoContext);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(1);

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
    <div className='container'>
      <Header />

      {todos.length === 0 ? (
        <main className='main'>
          <Form />
        </main>
      ) : (
        <>
          <main className='main'>
            <Form />
            <Todos todos={filteredTodos} />
          </main>

          <Footer
            activeTabIndex={activeTabIndex}
            handleTabChange={handleTabChange}
          />
        </>
      )}
    </div>
  );
};

export default App;
