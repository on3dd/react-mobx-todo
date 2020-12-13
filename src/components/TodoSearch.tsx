import React from 'react';
import { TextInput, Button } from 'evergreen-ui';

type TodoSearchProps = {
  disabled: boolean;
};

const TodoSearch: React.FC<TodoSearchProps> = ({
  disabled,
}: TodoSearchProps) => {
  return (
    <>
      <TextInput
        name="todo-input"
        placeholder="Enter the task name..."
        size={400}
        height={32}
        width="100%"
        disabled={disabled}
      />

      <Button marginLeft={8} appearance="primary" disabled={disabled}>
        Add
      </Button>
    </>
  );
};

export default TodoSearch;
