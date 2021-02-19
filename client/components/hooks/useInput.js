import { useState, useCallback } from 'react';

export default (initialState = null) => {
  const [State, setState] = useState(initialState);
  const handler = useCallback((e) => {
    setState(e.target.value);
  }, []);
  return [State, handler, setState];
};
