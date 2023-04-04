import { useContext, useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Header from '@/components/Header';
import Todos from '@/components/Todos';
import { TodoContext } from '@/contexts/TodoContext';

import './index.css';

const App = () => {
  const { todos } = useContext(TodoContext);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(1);

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

  const handleTabChange = tabIndex => {
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
