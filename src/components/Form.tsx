import type { FC, FormEvent } from 'react';
import { useContext, useRef } from 'react';

import { TodoContext } from '@/contexts/TodoContext';

const Form: FC = () => {
  const { todos, addTodo, completeAllTodos } = useContext(TodoContext);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = form.current?.['text-input'].value.trim();

    if (message !== '') {
      addTodo(message);
      form.current?.reset();
    }
  };

  return (
    <div className='form-container'>
      {todos.length > 0 && (
        <div className='checkbox-container'>
          <input
            type='checkbox'
            checked={todos.every(todo => todo.completed)}
            readOnly
            hidden
          />
          <span className='checkbox' onClick={() => completeAllTodos()}></span>
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} className='form'>
        <input
          id='text-input'
          name='text-input'
          className='text-input'
          placeholder='What needs to be done?'
        />
      </form>
    </div>
  );
};

export default Form;
