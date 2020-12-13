import React, { useMemo } from 'react';
import { Portal, Dialog } from 'evergreen-ui';

type TodoModalProps = {
  visible: boolean;
  deleting: boolean;
  onConfirm: (...args: any[]) => void;
  onCloseComplete: (...args: any[]) => void;
};

const TodoModal: React.FC<TodoModalProps> = ({
  visible,
  deleting,
  onConfirm,
  onCloseComplete,
}: TodoModalProps) => {
  const confirmLabel = useMemo(() => {
    return deleting ? 'Deliting...' : 'Delete';
  }, [deleting]);

  return (
    <Portal>
      <Dialog
        intent="danger"
        title="Are you sure?"
        isShown={visible}
        isConfirmDisabled={deleting}
        confirmLabel={confirmLabel}
        onConfirm={onConfirm}
        onCloseComplete={onCloseComplete}
      >
        Do you really want to delete this item? This action cannot be
        undone.
      </Dialog>
    </Portal>
  );
};

export default TodoModal;
