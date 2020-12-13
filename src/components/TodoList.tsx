import React from 'react';
import styled from 'styled-components';

import { Todo, TodoDraft } from '@react-mobx-todo';

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
  updateTodo: ({ id, title }: TodoDraft) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  data,
  updateTodo,
}: TodoListProps) => (
  <Ul>
    {data.map((el) => (
      // using the title as a key because the IDs can be duplicates
      // see https://jsonplaceholder.typicode.com/guide/
      <Li key={el.title}>
        <TodoItem data={el} updateTodo={updateTodo} />
      </Li>
    ))}
  </Ul>
);

export default TodoList;
