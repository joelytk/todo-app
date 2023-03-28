import { useContext, useRef, useState } from 'react';

import { TodoContext } from '@/contexts/TodoContext';

const Form = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const form = useRef(null);
  const counter = useRef(1);

  const getMax = todos.reduce((acc, item) => Math.max(acc, item.id), 0);

  const handleSubmit = e => {
    e.preventDefault();

    const message = form.current.input.value.trim();

    if (message !== '') {
      setTodos([
        {
          id: getMax + 1,
          message,
          completed: false
        },
        ...todos
      ]);
      counter.current += 1;
      form.current.reset();
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className='form'>
      <input
        id='input'
        name='input'
        className='input'
        placeholder='What needs to be done?'
      />
    </form>
  );
};

export default Form;
