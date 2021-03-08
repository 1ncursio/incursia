import { enableES5, produce } from 'immer';

const immer = (...args) => {
  enableES5();
  return produce(...args);
};

export default immer;
