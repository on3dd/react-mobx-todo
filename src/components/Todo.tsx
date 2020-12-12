import React, { useEffect } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';

import styled from 'styled-components';
import { Pane, Heading, TextInput } from 'evergreen-ui';

import { useTodosStore } from '../store/todos';

import TodoList from './TodoList';

const TodoContainer = styled.section`
  width: 100%;
  max-width: 500px;
  margin-top: 50px;
`;

const Todo: React.FC = observer(() => {
  const { store } = useTodosStore();

  useEffect(() => {
    autorun(() => {
      store.loadTodos();
    });
  }, [store]);

  return (
    <TodoContainer>
      <Pane elevation={1} padding={16} background="white">
        <Pane marginBottom={16}>
          <Heading size={800}>Todo List</Heading>
        </Pane>

        <Pane marginBottom={16}>
          <TextInput
            name="todo-input"
            placeholder="Enter the task name..."
            size={400}
            height={32}
            width="100%"
          />
        </Pane>

        <Pane>
          <TodoList data={store.todos} />
        </Pane>
      </Pane>
    </TodoContainer>
  );
});

export default Todo;
