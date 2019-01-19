// 3rd-party imports

import React from 'react';
import styled from 'styled-components';

// local imports

import LogoPNG from './logo.png';
import Button from './button';

// component

const Container = styled.div`
  background-color: #495057;
`;

const LogoContainer = styled.div`
  background-color: rgb(219, 10, 91);

  z-index: 5001;
  position: relative;

  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  & > img {
    height: 40px;
    margin: 10px;
  }

  height: 60px;
  max-height: 60px;
`;

const ButtonContainer = styled.div`
  margin-top: 15px;

  > * + * {
    margin-top: 10px;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={LogoPNG} alt="Logo" />
      </LogoContainer>
      <ButtonContainer>
        <Button label="⌘ 1" />
        <Button label="⌘ 2" />
        <Button label="⌘ 3" />
        <Button label="⌘ 4" />
      </ButtonContainer>
    </Container>
  );
};

export default Sidebar;
