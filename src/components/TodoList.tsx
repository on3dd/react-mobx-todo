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

const data: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
];

const TodoList: React.FC = () => {
  return (
    <Ul>
      {data.map((el) => (
        <Li key={el.id}>
          <TodoItem data={el} />
        </Li>
      ))}
    </Ul>
  );
};

export default TodoList;
