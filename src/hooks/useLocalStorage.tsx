import { useEffect, useState } from 'react';

const getStorageValue = (key: string, defaultValue: any) => {
  const saved = localStorage.getItem(key);
  const initial = saved !== null ? JSON.parse(saved) : null;
  return initial || defaultValue;
};

const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
