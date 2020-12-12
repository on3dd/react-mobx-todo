import React, {
  createContext,
  PropsWithChildren,
  useContext,
} from 'react';

import TodosStore from './store';

type TodosContextValue = {
  store: TodosStore;
};

const TodosStateContext = createContext<TodosContextValue>(
  {} as TodosContextValue,
);

const store = new TodosStore();

export const TodosStateProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => (
  <TodosStateContext.Provider value={{ store }}>
    {children}
  </TodosStateContext.Provider>
);

export const useTodosStore = () => {
  return useContext(TodosStateContext);
};
