import { Dispatch, SetStateAction, useState, useCallback } from 'react';

type Handler = (e: any) => void;
type ReturnTypes<T = any> = [T, Handler, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initialState: T): ReturnTypes<T> => {
  const [State, setState] = useState(initialState);
  const handler = useCallback((e) => {
    setState(e.target.value);
  }, []);
  return [State, handler, setState];
};

export default useInput;
