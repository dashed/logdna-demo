// 3rd-party imports

import React from 'react';
import styled from 'styled-components/macro';

// local imports

import Header from './header';
import Detail from './detail';
import Menu from './menu';

// component

const Container = styled.div`
  background-color: #fff;

  height: 100vh;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
`;

// this allows the drop-shadow of the header to be shown above
const HeaderContainer = styled.div`
  z-index: 5000;
`;

const SplitView = styled.div`
  /* Firefox issue: https://moduscreate.com/blog/how-to-fix-overflow-issues-in-css-flex-layouts */
  min-height: 0;

  flex-grow: 1;

  display: flex;
  flex-wrap: nowrap;
`;

const Content = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <SplitView>
        <Menu />
        <Detail />
      </SplitView>
    </Container>
  );
};

export default Content;
