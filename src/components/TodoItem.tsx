import React from 'react';
import { Card, Text } from 'evergreen-ui';

import { Todo } from '@react-mobx-todo';

type TodoItemProps = {
  data: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({
  data,
}: TodoItemProps) => {
  return (
    <Card border="default" padding={8} marginBottom={8}>
      <Text>{data.title}</Text>
    </Card>
  );
};

export default TodoItem;
