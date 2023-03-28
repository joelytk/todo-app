import { useContext, useEffect, useState } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Todos from '@/components/Todos';
import { TodoContext } from '@/contexts/TodoContext';

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
      {/* Header */}
      <Header />

      {todos.length > 0 && (
        <>
          {/* Main */}
          <main className='main'>
            {/* Todos */}
            <Todos todos={filteredTodos} />
          </main>

          {/* Footer  */}
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
