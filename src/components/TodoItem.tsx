import React from 'react';
import {
  Card,
  Pane,
  Text,
  IconButton,
  EditIcon,
  TrashIcon,
} from 'evergreen-ui';

import { Todo } from '@react-mobx-todo';

type TodoItemProps = {
  data: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({
  data,
}: TodoItemProps) => {
  return (
    <Card
      display="flex"
      alignItems="center"
      justify-content="space-between"
      border="default"
      padding={8}
      marginBottom={8}
    >
      <Pane display="flex" flex="1">
        <Text size={400}>{data.title}</Text>
      </Pane>

      <Pane display="flex">
        <IconButton icon={EditIcon} height={24} />
        <IconButton
          icon={TrashIcon}
          intent="danger"
          height={24}
          marginLeft={8}
        />
      </Pane>
    </Card>
  );
};

export default TodoItem;
