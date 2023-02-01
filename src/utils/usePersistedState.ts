import { useEffect, useState } from 'react';

export default function usePersistedState(key: string, initialState: any) {
  let storageValue: string | null;
  const [state, setState] = useState(() => {
    if (storageValue) return JSON.parse(storageValue);
    else return initialState;
  });

  useEffect(() => {
    const storageValue = localStorage.getItem(key);
    console.log(storageValue);
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
