// 3rd-party imports

import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components/macro';

// baseline css
import 'normalize.css';

// local imports

import Sidebar from './sidebar';
import Content from './content/index.js';

// components

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;

    overscroll-behavior-y: none;
  }
`;

const Container = styled.div`
  background-color: #fff;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-wrap: nowrap;
`;

const ContentWrapper = styled.div`
  flex-grow: 9999;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <ContentWrapper>
          <Content />
        </ContentWrapper>
      </Container>
    </React.Fragment>
  );
};

export default App;
