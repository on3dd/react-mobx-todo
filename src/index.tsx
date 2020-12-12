import React from 'react';
import ReactDOM from 'react-dom';

import { TodosStateProvider } from './store/todos';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TodosStateProvider>
      <App />
    </TodosStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
