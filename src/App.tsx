import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './utils/globalStyle';

import Todo from './components/Todo';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <AppContainer className="app">
      <GlobalStyle />
      <Todo />
    </AppContainer>
  );
};

export default App;
