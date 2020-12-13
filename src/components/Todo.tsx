import React, { useEffect, useMemo } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';

import styled from 'styled-components';
import { Pane, Heading } from 'evergreen-ui';

import { useTodosStore } from '../store/todos';

import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoPlaceholder from './TodoPlaceholder';

const TodoContainer = styled.section`
  width: 100%;
  max-width: 500px;
  margin-top: 50px;
`;

const Todo: React.FC = observer(() => {
  const { store } = useTodosStore();

  useEffect(() => {
    autorun(async () => {
      await store.loadTodos();
    });
  }, [store]);

  const renderView = useMemo(() => {
    return store.fetching ? (
      <TodoPlaceholder />
    ) : (
      <TodoList data={store.todos} />
    );
  }, [store.fetching, store.todos]);

  return (
    <TodoContainer>
      <Pane elevation={1} padding={16} background="white">
        <Pane marginBottom={16}>
          <Heading size={800}>Todo List</Heading>
        </Pane>

        <Pane display="flex" marginBottom={16}>
          <TodoSearch disabled={store.fetching} />
        </Pane>

        <Pane>{renderView}</Pane>
      </Pane>
    </TodoContainer>
  );
});

export default Todo;
