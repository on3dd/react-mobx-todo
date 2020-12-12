import React, { useEffect } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { useTodosStore } from '../store/todos';

import TodoItem from './TodoItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
`;

const TodoList: React.FC = observer(() => {
  const { store } = useTodosStore();

  useEffect(() => {
    console.log('useEffect');

    autorun(() => {
      console.log('autorun');

      store.loadTodos();
    });
  }, [store]);

  useEffect(() => {
    console.log('store.todos.length', store.todos.length);
  }, [store.todos.length]);

  return (
    <Ul>
      {store.todos.map((el) => (
        <Li key={el.id}>
          <TodoItem data={el} />
        </Li>
      ))}
    </Ul>
  );
});

export default TodoList;
