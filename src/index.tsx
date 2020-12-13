import React from 'react';
import ReactDOM from 'react-dom';

import { TodosStateProvider } from './store/todos';

import App from './App';

ReactDOM.render(
  // React.StrictMode was removed due to unfixable warning of evergreen ui
  // Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed
  // an instance of Transition which is inside StrictMode
  <TodosStateProvider>
    <App />
  </TodosStateProvider>,
  document.getElementById('root'),
);
