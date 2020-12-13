import React, { useState, useMemo, ChangeEvent } from 'react';
import {
  Card,
  Pane,
  Text,
  TextInput,
  IconButton,
  EditIcon,
  TrashIcon,
} from 'evergreen-ui';

import { Todo, TodoDraft } from '@react-mobx-todo';

import { trim } from '../utils/validations';

import TodoModal from './TodoModal';

type TodoItemProps = {
  data: Todo;
  updateTodo: ({ id, title }: TodoDraft) => void;
  deleteTodo: ({ id }: TodoDraft) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  data,
  updateTodo,
  deleteTodo,
}: TodoItemProps) => {
  const [title, setTitle] = useState(data.title);
  const [editing, setEditing] = useState(false);
  const [visible, setVisible] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const renderText = useMemo(() => {
    return <Text size={400}>{title}</Text>;
  }, [title]);

  const renderTextInput = useMemo(() => {
    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
      setTitle(evt.target.value);
    };

    return (
      <TextInput
        value={title}
        spellCheck={true}
        width="100%"
        onChange={onChange}
      />
    );
  }, [title]);

  const renderView = useMemo(() => {
    return editing ? renderTextInput : renderText;
  }, [editing, renderTextInput, renderText]);

  const toggleEditing = () => setEditing((prev) => !prev);
  const toggleVisible = () => setVisible((prev) => !prev);
  const toggleDeleting = (value: boolean) => {
    setDeleting(() => value);
  };

  const onEditClick = () => {
    if (editing) {
      trim(title)
        ? updateTodo({ id: data.id, title })
        : setTitle(data.title);
    }

    toggleEditing();
  };

  const onDeleteClick = () => {
    toggleVisible();
  };

  const onConfirm = () => {
    toggleDeleting(true);
    deleteTodo({ id: data.id });
  };

  const onCloseComplete = () => {
    toggleVisible();
    toggleDeleting(false);
  };

  return (
    <>
      <Card
        display="flex"
        alignItems="center"
        justify-content="space-between"
        border="default"
        padding={8}
        marginBottom={8}
      >
        <Pane display="flex" flex="1">
          {renderView}
        </Pane>

        <Pane display="flex" marginLeft={8}>
          <IconButton
            icon={EditIcon}
            height={24}
            marginRight={8}
            onClick={onEditClick}
          />

          <IconButton
            icon={TrashIcon}
            height={24}
            intent="danger"
            onClick={onDeleteClick}
          />
        </Pane>
      </Card>

      <TodoModal
        visible={visible}
        deleting={deleting}
        onConfirm={onConfirm}
        onCloseComplete={onCloseComplete}
      />
    </>
  );
};

export default TodoItem;
