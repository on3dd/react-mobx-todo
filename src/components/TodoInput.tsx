import React from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { Pane, TextInput, Button } from 'evergreen-ui';

import { TodoDraft } from '@react-mobx-todo';

const Form = styled.form`
  width: 100%;
`;

type TodoInputProps = {
  disabled: boolean;
  onSubmit: ({ title }: TodoDraft) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({
  disabled,
  onSubmit,
}: TodoInputProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Pane display="flex" width="100%" marginBottom={8}>
        <TextInput
          name="title"
          placeholder="Enter the task name..."
          size={400}
          height={32}
          width="100%"
          disabled={disabled}
          ref={register({ required: true })}
        />

        <Button
          type="submit"
          marginLeft={8}
          appearance="primary"
          disabled={disabled}
        >
          Add
        </Button>
      </Pane>
    </Form>
  );
};

export default TodoInput;
