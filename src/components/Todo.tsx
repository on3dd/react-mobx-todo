import React, { useEffect, useMemo, useCallback } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';

import styled from 'styled-components';
import { Pane, Heading } from 'evergreen-ui';

import { TodoDraft } from '@react-mobx-todo';

import { useTodosStore } from '../store/todos';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoPlaceholder from './TodoPlaceholder';

const TodoContainer = styled.section`
  width: 100%;
  max-width: 500px;
`;

const Todo: React.FC = observer(() => {
  const { store } = useTodosStore();

  useEffect(() => {
    autorun(() => {
      store.fetchTodos();
    });
  }, [store]);

  const createTodo = useCallback(
    ({ title = '' }: TodoDraft) => {
      store.createTodo(title);
    },
    [store],
  );

  const updateTodo = useCallback(
    ({ id = 0, title = '' }: TodoDraft) => {
      store.updateTodo(id, title);
    },
    [store],
  );

  const deleteTodo = useCallback(
    ({ id = 0 }: TodoDraft) => {
      store.deleteTodo(id);
    },
    [store],
  );

  const renderView = useMemo(() => {
    return store.fetching ? (
      <TodoPlaceholder />
    ) : (
      <TodoList
        data={store.todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    );
  }, [store.fetching, store.todos, updateTodo, deleteTodo]);

  return (
    <TodoContainer>
      <Pane elevation={1} padding={16} background="white">
        <Pane marginBottom={16}>
          <Heading size={800}>Todo List</Heading>
        </Pane>

        <Pane marginBottom={16}>
          <TodoInput
            disabled={store.fetching}
            onSubmit={createTodo}
          />
        </Pane>

        <Pane>{renderView}</Pane>
      </Pane>
    </TodoContainer>
  );
});

export default Todo;
