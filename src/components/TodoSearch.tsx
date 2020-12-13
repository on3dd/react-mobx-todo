import React from 'react';
import { TextInput, Button } from 'evergreen-ui';

const TodoSearch: React.FC = () => {
  return (
    <>
      <TextInput
        name="todo-input"
        placeholder="Enter the task name..."
        size={400}
        height={32}
        width="100%"
      />
      <Button marginLeft={8} appearance="primary">
        Add
      </Button>
    </>
  );
};

export default TodoSearch;
