// 3rd-party imports

import React from 'react';
import styled from 'styled-components';

// local imports

import HamburgerSVG from './hamburger.svg';

// component

const Container = styled.div`
  background: #f8f9fa;

  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);

  height: 60px;

  font-size: 1.5rem;
  font-weight: 100;

  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  align-items: center;
`;

const Title = styled.span`
  flex-grow: 9999;
`;

const HamgburgerIcon = styled.img`
  height: 25px;
  width: 25px;

  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Title>What is Lorem Ipsum?</Title>
      <HamgburgerIcon src={HamburgerSVG} />
    </Container>
  );
};

export default Header;
