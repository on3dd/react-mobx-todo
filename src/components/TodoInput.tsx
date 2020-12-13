import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { Pane, TextInput, Button } from 'evergreen-ui';

import { TodoDraft } from '@react-mobx-todo';

import { trim } from '../utils/validations';

type TodoInputProps = {
  disabled: boolean;
  onSubmit: ({ title }: TodoDraft) => void;
};

const Form = styled.form`
  width: 100%;
`;

const defaultValuesFactory = () => {
  return { title: '' };
};

const TodoInput: React.FC<TodoInputProps> = ({
  disabled,
  onSubmit,
}: TodoInputProps) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: defaultValuesFactory(),
  });

  const submit = useCallback(
    ({ title = '' }: TodoDraft) => {
      onSubmit({ title });
      reset(defaultValuesFactory());
    },
    [onSubmit, reset],
  );

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Pane display="flex" width="100%" marginBottom={8}>
        <TextInput
          name="title"
          placeholder="Enter the task name..."
          size={400}
          height={32}
          width="100%"
          disabled={disabled}
          ref={register({
            required: true,
            validate: trim,
          })}
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
