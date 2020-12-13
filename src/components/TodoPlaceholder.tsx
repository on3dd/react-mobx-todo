import React from 'react';
import { Spinner } from 'evergreen-ui';

const TodoPlaceholder: React.FC = () => {
  return <Spinner size={32} marginX="auto" />;
};

export default TodoPlaceholder;
