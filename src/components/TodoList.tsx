import React from 'react';
import styled from 'styled-components';

import { Todo } from '@react-mobx-todo';

import TodoItem from './TodoItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
`;

type TodoListProps = {
  data: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({
  data,
}: TodoListProps) => (
  <Ul>
    {data.map((el) => (
      <Li key={el.id}>
        <TodoItem data={el} />
      </Li>
    ))}
  </Ul>
);

export default TodoList;
