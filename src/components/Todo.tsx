import React from 'react';
import styled from 'styled-components';
import { Pane, Heading, TextInput } from 'evergreen-ui';

import TodoList from './TodoList';

const TodoContainer = styled.section`
  width: 100%;
  max-width: 500px;
  margin-top: 50px;
`;

const Todo: React.FC = () => {
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
            width="100%"
          />
        </Pane>

        <Pane>
          <TodoList />
        </Pane>
      </Pane>
    </TodoContainer>
  );
};

export default Todo;
